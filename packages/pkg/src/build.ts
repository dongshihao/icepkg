import consola from 'consola';
import { mergeConfigOptions } from './helpers/mergeConfigOptions.js';
import { buildAll } from './buildAll.js';

import type { PkgContext } from './types.js';

export default async (context: PkgContext) => {
  const { getConfig, applyHook, commandArgs } = context;

  const configs = getConfig();
  await applyHook('before.build.load', { args: commandArgs, config: configs });

  if (!configs.length) {
    const err = new Error('Could not Find any pending tasks when excuting \'build\' command.');
    throw err;
  }

  await applyHook('before.build.run', {
    args: commandArgs,
    config: configs,
  });

  const normalizedConfigs = configs.map((config) => mergeConfigOptions(config, context));

  try {
    await buildAll(normalizedConfigs, context);

    await applyHook('after.build.compile');
  } catch (err) {
    consola.error('Compile Error', err);
    await applyHook('error', {
      errCode: 'COMPILE_ERROR',
      err,
    });

    throw err;
  }
};

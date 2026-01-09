/**
 * @baseline/core - Core Baseline Functionality
 * 
 * This package contains all core functionality that can be used by:
 * - CLI tool (@baseline/cli)
 * - GUI application (@baseline/gui)
 * - Other consumers
 */

// Export config
export * from './config/index';

// Export types
export * from './types/index';

// Export utils
export * from './utils/index';

// Export plugins
export * from './plugins/index';

// Export command functions (not CLI wrappers)
export * from './commands/index';


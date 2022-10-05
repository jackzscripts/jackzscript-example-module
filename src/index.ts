
const ModuleInfo: ModuleInfo = {
    Name: "TypescriptModule",
    Version: "1.0.0",
    Description: "An example typescript to lua module"
}

/// Called when module is starting up
/// @param automatic

/**
 * Optional. Called when module is starting up, and plugin can take action
 *
 * @param {boolean} automatic Was the module loaded automatically (true) or manually (false)
 * @param {string} [previousVersion] If set, is the last version of module before it was updated
 * @return {*}  {boolean} TRUE to start, or FALSE to not start
 */
function onPreload(automatic: boolean, previousVersion?: string): boolean {
    return true
}


/**
 * Called once every module has been loaded.
 *
 * @param {MenuHandle} root The list entry for the module, in Stand -> Lua Scripts -> jackzscript -> [Module Name]
 */
function onStart(root: MenuHandle) {

}
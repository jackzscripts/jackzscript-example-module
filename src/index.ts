import * as JackzscriptModule from "./jackzscript.module"

export const ModuleInfo: JackzscriptModule.ModuleInfo = {
    Name: "TypescriptModule",
    Version: "1.0.0",
    Description: "An example typescript to lua module"
}

export const Libraries: JackzscriptModule.ModuleLibraries = {
    jackzvehiclelib: {
        SourceUrl: "https://jackz.me/stand/get-lua.php?script=jackzvehiclelib&branch=%branch%",
        Version: "0.1.0",
    }
}

export const Resources: JackzscriptModule.ModuleResources = {
    vehicles: {
        SourceUrl: "https://jackz.me/stand/resources/vehicles.txt",
        Version: "0.1.0",
    }
}

export default class MyModule implements JackzscriptModule.Module {
    /**
     * Optional. Called when module is starting up, and plugin can take action
     *
     * @param {boolean} automatic Was the module loaded automatically (true) or manually (false)
     * @param {string} [previousVersion] If set, is the last version of module before it was updated
     * @return {*}  {boolean} TRUE to start, or FALSE to not start
     */
    OnPreload(automatic: boolean, previousVersion?: string): boolean {
        return true
    }


    /**
     * Called once every module has been loaded.
     *
     * @param {MenuHandle} root The list entry for the module, in Stand -> Lua Scripts -> jackzscript -> [Module Name]
     */
    OnStart(root: CommandRef) {

    }

    /**
     * Called when a player joins a session
     *
     * @param {number} pid The player id (not their ped)
     * @param {MenuHandle} root The stand menu section for the player
     */
    OnPlayerJoin(pid: number, root: CommandRef) {
        const myPlayerMenu = root.action("Get Player ID", [], "", () => {
            Log.toast("Player's ID is: ", pid)
        })
    }


    /**
     * Called every frame if defined, no need to yield
     *
     * @param {number} tick An increasing tick number
     */
    OnTick(tick: number) {
        util.draw_debug_text("ts module " + tick)
    }


    /**
     * Called when the module is being unloaded
     *
     * @param {boolean} reloading TRUE if module is being unloaded then reloaded
     */
    OnExit(reloading: boolean) {
        if(!reloading)
            Log.toast("Goodbye cruel world")
    }
}


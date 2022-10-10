interface ModuleInfo {
    Name: string,
    Version?: string,
    Description?: string,
    Author?: string,
    Url?: string
}

interface ModuleResource {
    SourceUrl: string,
    Version: String,
    UpdateCheckUrl?: string,
    ChangelogUrl?: string
}
interface ModuleLibrary {
    SourceUrl: string,
    Version: String,
    UpdateCheckUrl?: string,
    ChangelogUrl?: string,

    
    /**
     * Should this library be a dedicated unique instance, or shared?
     *
     * @type {boolean} true for dedicated, false for shared
     * @memberof ModuleLibrary
     */
    dedicated?: boolean
}

interface ScriptModule {
    ModuleInfo: ModuleInfo,
    Resources?: ModuleResources,
    Libraries?: ModuleLibraries
    default: Module
}

interface RegisteredScriptModule extends ScriptModule {
    requirePath?: string,
    root?: CommandRef,
    reloadMenu?: CommandRef,
    toggleMenu?: CommandRef // Should always be required
}

type StartedScriptModule = Required<RegisteredScriptModule>

type ModuleDependency<T> = Record<string, T>
type ModuleResources = ModuleDependency<ModuleResource>
type ModuleLibraries = ModuleDependency<ModuleLibrary>

export interface Module {
    /**
     * Optional. Called when module is starting up, and plugin can take action
     *
     * @param {boolean} automatic Was the module loaded automatically (true) or manually (false)
     * @param {string} [previousVersion] If set, is the last version of module before it was updated
     * @return {*}  {boolean} TRUE to start, or FALSE to not start
     */
     OnPreload(automatic: boolean, previousVersion?: string): boolean
    
     /**
      * Called once every module has been loaded.
      *
      * @param {MenuHandle} root The list entry for the module, in Stand -> Lua Scripts -> jackzscript -> [Module Name]
      */
     OnStart(root: CommandRef): void
 
     /**
      * Called when a player joins a session
      *
      * @param {number} pid The player id (not their ped)
      * @param {MenuHandle} root The stand menu section for the player
      */
     OnPlayerJoin(pid: number, root: CommandRef): void;
 
 
     /**
      * Called every frame if defined, no need to yield
      *
      * @param {number} tick An increasing tick number
      */
     OnTick(tick: number): void
 
 
     /**
      * Called when the module is being unloaded
      *
      * @param {boolean} reloading TRUE if module is being unloaded then reloaded
      */
     OnExit(reloading: boolean): void;
}

// declare abstract class Module {
//     // abstract ModuleInfo: ModuleInfo
//     // abstract Resources: ModuleResources
//     // abstract Libraries: ModuleLibraries

//     /**
//      * Optional. Called when module is starting up, and plugin can take action
//      *
//      * @param {boolean} automatic Was the module loaded automatically (true) or manually (false)
//      * @param {string} [previousVersion] If set, is the last version of module before it was updated
//      * @return {*}  {boolean} TRUE to start, or FALSE to not start
//      */
//     OnPreload(automatic: boolean, previousVersion?: string): boolean
    
//     /**
//      * Called once every module has been loaded.
//      *
//      * @param {MenuHandle} root The list entry for the module, in Stand -> Lua Scripts -> jackzscript -> [Module Name]
//      */
//     OnStart(root: CommandRef): void

//     /**
//      * Called when a player joins a session
//      *
//      * @param {number} pid The player id (not their ped)
//      * @param {MenuHandle} root The stand menu section for the player
//      */
//     OnPlayerJoin(pid: number, root: CommandRef): void;


//     /**
//      * Called every frame if defined, no need to yield
//      *
//      * @param {number} tick An increasing tick number
//      */
//     OnTick(tick: number): void


//     /**
//      * Called when the module is being unloaded
//      *
//      * @param {boolean} reloading TRUE if module is being unloaded then reloaded
//      */
//     OnExit(reloading: boolean): void;
// }
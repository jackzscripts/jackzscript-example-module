declare let SCRIPT_DEBUG: boolean

/** @noSelf */
declare namespace Log {
    
    /**
     * Only prints to log if SCRIPT_DEBUG is true
     *
     * @param {...any} arguments
     */
    function debug(...arguments: any): void 
    function debugTable(table: any): void
    function warn(...arguments: any): void
    function error(...arguments: any): void
    function severe(...arguments: any): void
    function log(...arguments: any): void
    function toast(...arguments: any): void
}

type TimerId = number
interface SemverVersion {
    major: number,
    minor: number,
    patch: number
}

/** @noSelf */
declare namespace JUtil {

    /**
     * Creates a new file at path
     *
     * @param {string} path
     */
    function TouchFile(path: string): void

    /**
     * Reads a key value file
     *
     * @param {LuaFile} file A file handle
     * @return {*} {Record<string, string>} A record from the file
     */

    function ReadKV(file: LuaFile): Record<string, string>

    /**
     * Writes a record to disk
     *
     * @param {LuaFile} file A file handle
     * @param {Record<string, any>} keyvalues The key values
     * @param {string} [prefix] An optional prefix for the top of the file
     */
    function WriteKV(file: LuaFile, keyvalues: Record<string, any>, prefix?: string): void

    /**
     *
     * Creates a timer that will call the callback at the specified interval. Can cancel with StopTimer(timerId)
     * @param {number} ms
     * @param {Function} callback
     * @param {...any} callbackArgs any arguments to pass to the callback
     * @return {*}  {TimerId}
     */
    function CreateTimer(ms: number, callback: Function, ...callbackArgs: any): TimerId
    interface AdvancedTimer {

        Enable: void
        Disable: void
        Kill: void
    }
    interface AdvancedTimerConstructor {

        /**
         * Creates a new advanced timer that will constantly call a callback. See 'AdvancedTimer'
         * @param {Function} callback The function to call for the specified on duration
         * @param {number} duration The interval of the timer, when it will be OFF
         * @param {number} durationOn The duration that the callback will be called until it switches to being off
         *
         * @return {*}  {AdvancedTimer}
         * @memberof AdvancedTimerConstructor
         */
        CreateTimer: (this: void, callback: Function, duration: number, durationOn?: number) => AdvancedTimer
    }

    /**
     * Calls the callback after the specified amount of time has passed
     *
     * @param {number} ms
     * @param {Function} callback
     * @param {...any} arguments any arguments for the callback
     * @return {*}  {TimerId}
     */
    function CreateTimeout(ms: number, callback: Function, ...arguments: any): TimerId
    
    /**
     * Stops the interval or timer from continuing
     *
     * @param {TimerId} timerId
     * @return {*}  {boolean} TRUE if timer existed and was stopped, false if it was invalid
     */
    function StopTimer(timerId: TimerId): boolean

    /**
     * Returns a semver {major, minor, patch} form a string
     *
     * @param {string} version The version to parse
     * @return {*}  {SemverVersion}
     */

    function ParseSemver(version: string): SemverVersion

    /**
     * Compares two semver strings and returns the difference
     *
     * @param {string} versionA
     * @param {string} versionB
     * @return {*}  {number} returns 0 if they are the same, 1 if A is greater than B, -1 if A is less than B
     */
    function CompareSemver(versionA: string, versionB: string): number
    function DumpTable(object: any): string

    /**
     * Fetches a JSON object from a url
     *
     * @param {string} uri the url to request from
     * @param {Record<string, string>} [headers] Any HTTP headers for the request
     * @param {Function} successCallback The callback with the data
     * @param {Function} [errorCallback] Callback if any errors occurred
     */
    function GetJson(uri: string, headers: Record<string, string>, successCallback: JsonSuccessCallback, errorCallback?: JsonErrorCallback): void


    /**
     * Posts a JSON object to an url
     *
     * @param {string} uri the url to post to
     * @param {Record<string, string>} headers Any HTTP headers for the request
     * @param {Record<string, any>} payload the JSON object to POST
     * @param {JsonSuccessCallback} successCallback The callback with the response
     * @param {JsonErrorCallback} [errorCallback] Callback if any errors occurred
     */
    function PostJson(uri: string, headers: Record<string, string>, payload: Record<string, any>, successCallback: JsonSuccessCallback, errorCallback?: JsonErrorCallback): void

    /**
     * Shows a busy spinner with the specified text. End with StopBusySpinner
     *
     * @param {string} text
     */
    function ShowBusySpinner(text: string): void
    function StopBusySpinner(): void


    /**
     * Yields until specified model is loaded
     *
     * @param {Hash} hash The hash of the model (after util.joaat)
     */
    function LoadModel(hash: Hash): void
}

type JsonSuccessCallback = (statusCode: number, resHeaders: Record<string, string>, body: any) => any

type JsonErrorCallback = (statusCode: number, resHeaders: Record<string, string>, error: string) => any



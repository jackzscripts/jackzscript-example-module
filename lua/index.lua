local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
ModuleInfo = {Name = "TypescriptModule", Version = "1.0.0", Description = "An example typescript to lua module"}
Libraries = {jackzvehiclelib = {SourceUrl = "https://jackz.me/stand/get-lua.php?script=jackzvehiclelib&branch=%branch%", Version = "0.1.0"}}
Resources = {vehicles = {SourceUrl = "https://jackz.me/stand/resources/vehicles.txt", Version = "0.1.0"}}
MyModule = __TS__Class()
MyModule.name = "MyModule"
__TS__ClassExtends(MyModule, Module)
function MyModule.prototype.OnPreload(self, automatic, previousVersion)
    return true
end
function MyModule.prototype.OnStart(self, root)
end
function MyModule.prototype.OnPlayerJoin(self, pid, root)
    local myPlayerMenu = root:action(
        "Get Player ID",
        {},
        "",
        function()
            Log.toast("Player's ID is: ", pid)
        end
    )
end
function MyModule.prototype.OnTick(self, tick)
end
function MyModule.prototype.OnExit(self, reloading)
    if not reloading then
        Log.toast("Goodbye cruel world")
    end
end

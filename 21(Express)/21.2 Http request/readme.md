//To config the settings.json 
npm init -y

//I Got an error while using nodemon in the terminal
//Nodemon used beacause we can stop them every time need to run like this ('node index.js').


PS C:\Users\sande\OneDrive\Desktop\CompWebDevelopment\21(Express)\21.2 Http request> nodemon index.js
nodemon : File C:\Users\sande\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see 
about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon index.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\Users\sande\OneDrive\Desktop\CompWebDevelopment\21(Express)\21.2 Http request> nodemon index.js
nodemon : File C:\Users\sande\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see 
about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon index.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\Users\sande\OneDrive\Desktop\CompWebDevelopment\21(Express)\21.2 Http request> Get-ExecutionPolicy
Restricted
PS C:\Users\sande\OneDrive\Desktop\CompWebDevelopment\21(Express)\21.2 Http request> Set-ExecutionPolicy RemoteSigned
Set-ExecutionPolicy : Access to the registry key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell' is denied. To change the execution 
policy for the default (LocalMachine) scope, start Windows PowerShell with the "Run as administrator" option. To change the execution policy for the current user, run      
"Set-ExecutionPolicy -Scope CurrentUser".
At line:1 char:1
+ Set-ExecutionPolicy RemoteSigned
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : PermissionDenied: (:) [Set-ExecutionPolicy], UnauthorizedAccessException
    + FullyQualifiedErrorId : System.UnauthorizedAccessException,Microsoft.PowerShell.Commands.SetExecutionPolicyCommand
PS C:\Users\sande\OneDrive\Desktop\CompWebDevelopment\21(Express)\21.2 Http request> Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
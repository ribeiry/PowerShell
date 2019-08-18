function Test-Port(){

 $computer=Read-Host "Computername | IP Address?"
 $port=Read-Host "Port Numbers? Separate them by comma"
 [int]$inicio=$port.split(',')[0]
 [int]$fim=$port.split(',')[1]
 if($fim -eq 0)
 {
     $fim = $inicio
 }
 while (($inicio -lt $fim) -OR ($inicio -eq $fim)) {
    If (($a=Test-NetConnection $computer -Port $inicio -WarningAction SilentlyContinue).tcpTestSucceeded -eq $true) {
        Write-Host $a.Computername $a.RemotePort -ForegroundColor Green -Separator " ==> "
    } 
    else {
        Write-Host $a.Computername $a.RemotePort -Separator " ==> " -ForegroundColor Red
    }
    $inicio ++  
 }
}
document.getElementById("code6").value = 
            
`$c[VARIABLES NEEDED:
-------------------------------
isPaused
value=false
volume
value=100
-------------------------------
]

$embedSuppressErrors[Error;;#1ED761;;;]
$varExistError[isPaused;Make sure to make a new variable with name "isPaused" and value "false" ]
$varExistError[volume;Make sure to make a new variable with name "isPaused" and value "100"]

$c[ Credits of the code go to Berk#3506 and vidk#2010]
$c[ API by Almighty Neko#0121 ]

$nomention

$var[host;https://bdfd-music.YOUR-REPLIT-USERNAME.repl.co] $c[<=== REPLACE THE HOST WITH YOUR OWN URL] 
$c[P.S. this is a url you entered in the uptimerobot.com dashboard, such as https://bdfd-music.your-replit-username.repl.co]

$httpGet[$var[host]/voice_channel_id/$guildID/$authorID]
$onlyIf[$httpResult[voice_id]!=;]

$httpGet[$var[host]/voice_channel_id/$guildID/$botID]
$onlyIf[$httpResult[voice_id]!=;]

$httpPost[$var[host]/pause/$guildID;{}]

$description[Successfully paused the song!]

$color[#1ED761]
$footer[Requested by $username[$authorID]#$discriminator[$authorID]]

$setServerVar[isPaused;true]
$editButton[pause;Pause;primary;yes;⏸;]
$editButton[resume;Resume;primary;no;▶;]
$editButton[skip;Skip;primary;yes;⏭;]
$editButton[songinfo;Song Info;success;no;🎶;]`
;

document.getElementById("code1").value =
`$c[VARIABLES NEEDED:
-------------------------------
staffchannel
value=$botID
staffrole1
value=$botID
staffrole2
value=$botID
staffperm1
value=$botID
staffperm2
value=$botID
-------------------------------
]
    
$varExistError[staffchannel;Make sure to make a new variable with name "staffchannel" and value "$botID"]
$varExistError[staffrole1;Make sure to make a new variable with name "staffrole1" and value "$botID"]
$varExistError[staffrole2;Make sure to make a new variable with name "staffrole2" and value "$botID"]
$varExistError[staffperm1;Make sure to make a new variable with name "staffperm1" and value "$botID"]
$varExistError[staffperm2;Make sure to make a new variable with name "staffperm2" and value "$botID"]
$onlyIf[$guildID!=;This command only works on servers.]
$embedSuppressErrors[Error;;88888;;;]
    
$nomention
$onlyIf[$and[$channelExists[$getServerVar[staffchannel]]==true;$roleExists[$getServerVar[staffrole1]]==true;$roleExists[$getServerVar[staffperm1]]==true]==true;As first, please use tt!set to setup the staff statuses command.]
$onlyIf[$or[$hasRole[$authorID;$getServerVar[staffperm1]]==true;$hasRole[$authorID;$getServerVar[staffperm2]]==true]==true;]
$if[$or[$hasRole[$authorID;$getServerVar[staffrole1]]==true;$hasRole[$authorID;$getServerVar[staffrole2]]==true]==true]
$description[:mage: Staff mode successfully disabled, note, you will keep the staff permissions, the thing removed is the hoisted role!]
$color[e4b400]
$if[$and[$roleExists[$getServerVar[staffrole1]]==true;$hasRole[$authorID;$getServerVar[staffperm1]]==true;$hasRole[$authorID;$getServerVar[staffrole1]]==true]==true] $takeRole[$authorID;$getServerVar[staffrole1]] $endif
$if[$and[$roleExists[$getServerVar[staffrole2]]==true;$hasRole[$authorID;$getServerVar[staffperm2]]==true;$hasRole[$authorID;$getServerVar[staffrole2]]==true]==true] $takeRole[$authorID;$getServerVar[staffrole2]] $endif
$sendEmbedMessage[$getServerVar[staffchannel];;;;The staff **$username[$authorID]#$discriminator[$authorID]** is now off-duty, they're not available!  **ID $authorID**;e4b400;;;;;;;no;no]
$else
    
$description[:ringed_planet: Staff mode successfully enabled! have fun]
$footer[Welcome back, staff!]
$color[deff]
$if[$and[$roleExists[$getServerVar[staffrole1]]==true;$hasRole[$authorID;$getServerVar[staffperm1]]==true;$hasRole[$authorID;$getServerVar[staffrole1]]==false]==true] $giveRole[$authorID;$getServerVar[staffrole1]] $endif
$if[$and[$roleExists[$getServerVar[staffrole2]]==true;$hasRole[$authorID;$getServerVar[staffperm2]]==true;$hasRole[$authorID;$getServerVar[staffrole2]]==false]==true] $giveRole[$authorID;$getServerVar[staffrole2]] $endif
$sendEmbedMessage[$getServerVar[staffchannel];;;;The staff **$username[$authorID]#$discriminator[$authorID]** is on-duty, they're available! **ID $authorID**;deff;;;;;;;no;no]
$endif`
 getMarkerInfo(marker) {
        var self = this;
        var playerName= "djbobbysocks";
        var url = "https://api.bf4stats.com/api/playerInfo?plat=pc&name="+playerName+"&output=js";
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        self.state.infowindow.setContent("Sorry data can't be loaded");
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        let player_data = data.response.name[0];
                        let playerName = '<b><h1>Player Name</h1></b>' + (player_data.name) + '<br>';
                        let playerBattlelog = '<a href=' + (player_data.blPlayer) + '>Player Profile</a>';
                        self.state.infowindow.setContent(playerName +playerBattleLog);
                    });
                }
            )
            .catch(function (err) {
                self.state.infowindow.setContent("Sorry data can't be loaded");
            });
    }
function MainController(e,t,r,n){function o(e){var t=[];return e.forEach(function(e,r){var n={locationId:e.OutboundLeg.Destination.PlaceId,locationName:e.OutboundLeg.Destination.CityName};t.push(n)}),t}var s=this;this.searchResults=[],this.currentUser=e.getPayload(),this.logout=function(){e.logout(),this.currentUser=null,t.go("/")},this.storeUserSearch=function(){this.filteredSearchResults=o(this.searchResults),n.update({id:this.currentUser._id},{filteredSearchResults:this.filteredSearchResults},function(e){s.currentUser=e,console.log(s.currentUser)})},r.$on("loggedIn",function(){s.currentUser=e.getPayload()}),r.$on("searchResults",function(e,t){s.searchResults=t,s.storeUserSearch();var r=s.filteredSearchResults.map(function(e){return e.locationId});n.query({locationIds:r.join(",")},function(e){s.similarUsers=e,console.log("This are the similar users: ",e)})})}angular.module("TravellyApp").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope","User"];
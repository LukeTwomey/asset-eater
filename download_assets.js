// Create array to hold all the assets we want to download
var assetsToDownload = [];

// Get the name of the folder you are currently viewing. The assets will be saved to the same folder name when downloaded locally.
var saveToDirectoryHTMLElement = document.getElementById("gwt-debug-assets-details-panel-name");
var saveToDirectory = saveToDirectoryHTMLElement.title;

// Get the 'folder base path' which will be combined with each asset name
var folderBasePathHTMLElement = document.getElementById("gwt-debug-assets-details-panel-folder-base-path");
var folderBasePath = folderBasePathHTMLElement.value;

// Get all of the assets from the page
var assets = document.getElementsByClassName("HDO65V-b-Sd");

// If the asset is an image, it will contain this string
var substring = "assets-table-asset";

// Loop through all of the assets and add them to the array
for(i = 0; i < assets.length ; i++){
	// Get the ID of the asset. Need to determine if it's an image or a folder. Only want to download the images.
	var assetId = assets[i].id;
	// If the asset is an image, add it to the array to be downloaded
	if(assetId.includes(substring)){
		var imageSrc = folderBasePath + assets[i].innerText;
		var filepath = saveToDirectory + "/" + assets[i].innerText;
		assetsToDownload.push({
			url: imageSrc,
	  	 	filename: filepath
		})
	}
}

// Now you've got an array of the assets you want, pass it back to listener.js to download
chrome.runtime.sendMessage(assetsToDownload);


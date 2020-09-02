/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.image_previewText = '';
    config.removeDialogTabs = 'image:advanced;image:Link';//隐藏超链接与高级选项
	config.filebrowserUploadUrl="http://127.0.0.1/jgg/uploader.php";
    config.filebrowserImageUploadUrl = "http://localhost/jgg/files";//上传图片的地址
	//config.filebrowserUploadUrl = '/jgg/test2.php?action=address&do=upload';
	//config.filebrowserBrowseUrl = '/jgg/ckfinder/ckfinder.html';
	//config.filebrowserImageBrowseUrl = '/jgg/ckfinder/ckfinder.html?Type=Images';
	//config.filebrowserFlashBrowseUrl = '/jgg/ckfinder/ckfinder.html?Type=Flash';
	//config.filebrowserUploadUrl = '/jgg/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
	//config.filebrowserImageUploadUrl = '/jgg/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
	//config.filebrowserFlashUploadUrl = '/jgg/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
	// config.filebrowserWindowWidth = ’800′;
	// config.filebrowserWindowHeight = ’500′;
};

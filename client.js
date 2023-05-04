var $, _;
if (typeof module === 'object' && module.exports) {
	$ = require('jquery');
	_ = require('underscore');
}

var Client = function Client() {
	var self = this;
	self.sharedHeaders = {};

	// Adds an Authorization header to send along with any
	//   requests through using this instance of the client
	self.addAuth = function(value) {
		self.sharedHeaders["Authorization"] = value;
	}
	self.removeAuth = function() {
		delete self.sharedHeaders["Authorization"];
	}

	// api.postAccessTokens((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postAccessTokens = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/access_tokens";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getActivities((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getActivities = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/activities";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postActivities((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postActivities = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/activities";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getActivity(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getActivity = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/activities/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchActivity(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchActivity = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/activities/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteActivity(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteActivity = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/activities/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postAdmins((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postAdmins = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/admins";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAdmin(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAdmin = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/admins/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchAdmin(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchAdmin = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/admins/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAnalyzeGroupInsights((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAnalyzeGroupInsights = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/analyze/group_insights";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAnalyzeIndividualInsights((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAnalyzeIndividualInsights = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/analyze/individual_insights";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAnalyzeProgress((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAnalyzeProgress = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/analyze/progress";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAnalyzeSkillsets((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAnalyzeSkillsets = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/analyze/skillsets";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAnswers((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAnswers = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/answers";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postAnswers((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postAnswers = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/answers";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAnswer(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAnswer = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/answers/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchAnswer(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchAnswer = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/answers/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteAnswer(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteAnswer = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/answers/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAssignments((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAssignments = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/assignments";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postAssignments((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postAssignments = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/assignments";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAssignment(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAssignment = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/assignments/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchAssignment(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchAssignment = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/assignments/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteAssignment(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteAssignment = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/assignments/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAssignmentsCurrent((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAssignmentsCurrent = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/assignments/current";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getAvatar(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getAvatar = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/avatars/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchAvatar(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchAvatar = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/avatars/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postAwards((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postAwards = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/awards";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getBooks((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getBooks = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/books";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postBooks((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postBooks = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/books";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getBook(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getBook = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/books/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getBookNewsFeedItem(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getBookNewsFeedItem = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/books/{id}/news_feed_item";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getComments((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getComments = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/comments";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postComments((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postComments = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/comments";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getComment(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getComment = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/comments/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchComment(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchComment = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/comments/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteComment(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteComment = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/comments/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postContactMessages((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postContactMessages = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/contact_messages";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getDocRequest((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getDocRequest = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/doc_request";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postEvaluations((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postEvaluations = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/evaluations";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchEvaluation(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchEvaluation = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/evaluations/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postFeedbackItem((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postFeedbackItem = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/feedback_item";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchFeedbackItem(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchFeedbackItem = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/feedback_item/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getLogs((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getLogs = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/logs";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postLogs((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postLogs = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/logs";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getLog(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getLog = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/logs/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchLog(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchLog = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/logs/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteLog(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteLog = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/logs/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getNewsFeedItems((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getNewsFeedItems = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/news_feed_items";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getNewsFeedItem(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getNewsFeedItem = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/news_feed_items/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getNewsFeedItemComments(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getNewsFeedItemComments = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/news_feed_items/{id}/comments";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postNewsFeedItemComments(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postNewsFeedItemComments = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/news_feed_items/{id}/comments";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getNotifications((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getNotifications = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/notifications";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postParents((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postParents = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/parents";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getParent(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getParent = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/parents/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchParent(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchParent = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/parents/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getPatches((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getPatches = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/patches";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postPatches((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postPatches = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/patches";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getPasswordResets((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getPasswordResets = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/password_resets";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postPasswordResets((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postPasswordResets = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/password_resets";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getPerks((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getPerks = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/perks";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postPerks((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postPerks = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/perks";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getQuestions((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getQuestions = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/questions";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postQuestions((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postQuestions = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/questions";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getQuestionsQuiz((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getQuestionsQuiz = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/questions/quiz";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getQuestion(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getQuestion = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/questions/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchQuestion(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchQuestion = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/questions/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteQuestion(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteQuestion = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/questions/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getQuizzes((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getQuizzes = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/quizzes";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postQuizzes((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postQuizzes = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/quizzes";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getQuiz(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getQuiz = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/quizzes/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchQuiz(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchQuiz = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/quizzes/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteQuiz(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteQuiz = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/quizzes/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getRatings((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getRatings = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/ratings";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postRatings((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postRatings = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/ratings";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getRating(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getRating = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/ratings/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchRating(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchRating = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/ratings/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteRating(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteRating = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/ratings/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getReadingLevels((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getReadingLevels = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/reading_levels";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postReadingLevels((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postReadingLevels = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/reading_levels";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getReferrals((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getReferrals = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/referrals";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postReferrals((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postReferrals = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/referrals";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getResponses((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getResponses = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postResponses((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postResponses = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getResponse(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getResponse = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchResponse(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchResponse = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteResponse(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteResponse = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getResponseNewsFeedItem(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getResponseNewsFeedItem = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses/{id}/news_feed_item";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getResponseLink(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getResponseLink = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/responses/{id}/link";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postRosters((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postRosters = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/rosters";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postRostersParse((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postRostersParse = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/rosters/parse";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getStats((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getStats = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/stats";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getSchoolOrgs((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getSchoolOrgs = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/school_orgs";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postSchoolOrgs((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postSchoolOrgs = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/school_orgs";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getSchoolOrg(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getSchoolOrg = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/school_orgs/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchSchoolOrg(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchSchoolOrg = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/school_orgs/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteSchoolOrg(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteSchoolOrg = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/school_orgs/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getStudentList(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getStudentList = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/student_lists/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchStudentList(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchStudentList = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/student_lists/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteStudentList(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteStudentList = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/student_lists/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getStudentLists((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getStudentLists = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/student_lists";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postStudentLists((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postStudentLists = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/student_lists";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getStudents((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getStudents = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/students";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postStudents((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postStudents = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/students";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getStudent(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getStudent = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/students/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchStudent(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchStudent = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/students/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteStudent(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteStudent = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/students/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getTags((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getTags = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tags";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postTags((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postTags = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tags";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteTag(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteTag = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tags/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getTasks((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getTasks = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tasks";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postTasks((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postTasks = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tasks";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getTask(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getTask = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tasks/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.patchTask(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.patchTask = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tasks/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { data = JSON.stringify(arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "PATCH",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteTask(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteTask = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/tasks/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.postUserAlerts((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.postUserAlerts = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/user_alerts";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { data = JSON.stringify(arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "POST",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.deleteUserAlert(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.deleteUserAlert = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/user_alerts/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "DELETE",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getUserNewsItems((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getUserNewsItems = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/user_news_items";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getUsers((primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getUsers = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/users";
	url += ".json";

	url = url;

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 1) && arguments[0]) { _.extend(queryParams, arguments[0]); }
	if ((arguments.length > 2) && arguments[1]) { extraParameters = arguments[1]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}

// api.getUser(id, (primary_parameters), (additional_parameters), callback)
//   primary_parameters added to query for GET or DELETE and body for POST and PATCH
//   optional additional_parameters: { query: {}, body: {}, headers: {}, form: {} }
self.getUser = function() {
	var data = null;
	var postBinaryBody = null;
	var extraParameters = null;

	var url = getUrlBase() + "/api/v1/users/{id}";
	url += ".json";

	url = url.replace('{id}', arguments[0]);

	var queryParams = {};
	var headerParams =  {};

	if ((arguments.length > 2) && arguments[1]) { _.extend(queryParams, arguments[1]); }
	if ((arguments.length > 3) && arguments[2]) { extraParameters = arguments[2]; }

	var callback = arguments[arguments.length - 1];

	if (extraParameters && extraParameters["form"] && (extraParameters["body"] || data)) {
		throw "can't submit both form and body data"
	}

	var mimeTypes = undefined;
	var contentType = "application/json";
	var processData = true;

	if (extraParameters != null) {
		if (extraParameters['query']) {
			_.extend(queryParams, extraParameters['query']);
		}
		if (extraParameters['header']) {
			_.extend(headerParams, self.sharedHeaders, extraParameters['header']);
		}
		if (extraParameters['form']) {
			data = extraParameters['form'];
			mimeTypes = "multipart/form-data";
			contentType = false;
			processData = false;
		}
		if (extraParameters['body']) {
 			data = JSON.stringify(extraParameters['body']);
		}
	}
	_.extend(headerParams, self.sharedHeaders);

	url += createQueryString(queryParams);

	var options = {
		type: "GET",
		async: true,
		contentType: contentType,
		mimeTypes: mimeTypes,
		dataType: "json",
		processData: processData,
		data: data,
		headers: headerParams
	};
	var request = $.ajax(url, options);

	request.fail(function(jqXHR, textStatus, errorThrown){
		if (callback) {
			callback(jqXHR.responseJSON, false, jqXHR.status, jqXHR);
		}
	});

	request.done(function(response, textStatus, jqXHR){
		if (callback) {
			callback(response, true, jqXHR.status, jqXHR);
		}
	});

	return request;
}


	function replaceAll(haystack, needle, replace) {
		var result= haystack;
		if (needle != null && replace != null) {
			result= haystack.replace(new RegExp(needle, 'g'), replace);
		}
		return result;
	}

 	function createQueryString(queryParams) {
		var queryString ='';
		var i = 0;
		for (var queryParamName in queryParams) {
			if (i == 0) {
				queryString += '?' ;
			} else {
				queryString += '&' ;
			}
			
			queryString += queryParamName + '=' + encodeURIComponent(queryParams[queryParamName]);
			i++;
		}
		
		return queryString;
	}

	function getUrlBase() {
		var protocol = Client.alternateProtocol || "https";
		var host = Client.alternateHost || "api.whooosreading.org";
		return protocol + "://" + host;
	}
}

Client.setHost = function(host, protocol) {
	Client.alternateHost = host;
	Client.alternateProtocol = protocol;
}

// export module for Node.js
if (typeof module === 'object' && module.exports) {
	module.exports = Client;
}

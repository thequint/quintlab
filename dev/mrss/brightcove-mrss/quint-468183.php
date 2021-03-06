
<?php
/**
 * bcls-proxy.php - proxy for Brightcove RESTful APIs
 * gets an access token, makes the request, and returns the response
 * Accessing:
 *     URL: https://solutions.brightcove.com/bcls/bcls-proxy/bcsl-proxy.php
 *         (note you should *always* access the proxy via HTTPS)
 *     Method: POST
 *
 * @post {string} url - the URL for the API request
 * @post {string} [requestType=GET] - HTTP method for the request
 * @post {string} [requestBody=null] - JSON data to be sent with write requests
 * @post {string} client_id - OAuth2 client id with sufficient permissions for the request
 * @post {string} client_secret - OAuth2 client secret with sufficient permissions for the request
 *
 * @returns {string} $response - JSON response received from the API
 */
// CORS enablement
// set up request for access token


$data = array();
$client_id     = 'a43897ed-e15c-4adf-9244-f205d3ef9091';
$client_secret = 'Jbq_AjozKI-eITwacHxQF-PurGA7LJp-h7oiILw1c1iES8KcfnJfNQjD5SNBUGxaiaBvVmOvGX6aJXx8gwCxng';
$auth_string   = "{$client_id}:{$client_secret}";
$request       = "https://oauth.brightcove.com/v3/access_token?grant_type=client_credentials";
$ch            = curl_init($request);
curl_setopt_array($ch, array(
        CURLOPT_POST           => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_SSL_VERIFYPEER => FALSE,
        CURLOPT_USERPWD        => $auth_string,
        CURLOPT_HTTPHEADER     => array(
            'Content-type: application/x-www-form-urlencoded',
        ),
        CURLOPT_POSTFIELDS => $data
    ));
$response = curl_exec($ch);
curl_close($ch);
// Check for errors
if ($response === FALSE) {
    die(curl_error($ch));
}
// Decode the response
$responseData = json_decode($response, TRUE);
$access_token = $responseData["access_token"];
//echo($access_token);
// See (?) http://php.net/manual/en/function.filter-input-array.php
$myPostArgs = file_get_contents("php://input");
// foreach($myPostArgs as $key => $value)
// {
//     echo($key.": ".$value);
//     echo("\n");
// }
//echo("\n\n");
// set up the API call
// get data

$myPostArgs = json_decode($myPostArgs, true);

if ($myPostArgs["requestBody"]) {
    $data = json_decode($myPostArgs["requestBody"]);
    //echo($data);
} else {
    $data = array();
}
// get request type or default to GET
if ($myPostArgs["requestType"]) {
    $method = $myPostArgs["requestType"];
    //echo($method."\n\n");
} else {
    $method = "GET";
}
if (strpos($myPostArgs["url"], 'api.brightcove.com') == false) {
    exit('Only requests to Brightcove APIs are accepted by this proxy');
}
// get the URL and authorization info from the form data
$request = $myPostArgs["url"];
if (strpos($request, '%3A') == true) {
	$request = urldecode($request);
}
//echo($request."\n\n");
//send the http request
$ch = curl_init($request);
curl_setopt_array($ch, array(
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_SSL_VERIFYPEER => FALSE,
        CURLOPT_HTTPHEADER     => array(
            'Content-type: application/json',
            "Authorization: Bearer {$access_token}",
        ),
        CURLOPT_POSTFIELDS => json_encode($data)
    ));
$response = curl_exec($ch);
curl_close($ch);
// Check for errors
if ($response === FALSE) {
    $logEntry = "\nError:\n".
    "\n".date("Y-m-d H:i:s")." UTC \n"
    .$response;
    $logFileLocation = "log.txt";
    $fileHandle      = fopen($logFileLocation, 'a') or die("hello rob");
    fwrite($fileHandle, $logEntry);
    fclose($fileHandle);
    echo "Error: there was a problem with your API call"+
    die(curl_error($ch));
}
// Decode the response
// $responseData = json_decode($response, TRUE);
// return the response to the AJAX caller
echo $response;
?>

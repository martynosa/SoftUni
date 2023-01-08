function solve(httpObj) {

    validateMethod(httpObj)
    validateUri(httpObj)
    validateVersion(httpObj)
    validateMessage(httpObj)

    return httpObj;

    function validateMessage(httpObj) {
        let name = 'message';
        let messageRegex = /^[^<>\\&'"]*$/;

        if (httpObj[name] === undefined ||
            !messageRegex.test(httpObj[name])) {
            throw new Error('Invalid request header: Invalid Message')
        }
    }

    function validateVersion(httpObj) {
        let name = 'version';
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (httpObj[name] === undefined ||
            !validVersions.includes(httpObj[name])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateUri(httpObj) {
        let name = 'uri';
        let uriRegex = /^\*$|^[a-zA-Z0-9.@#*&]+$/;

        if (httpObj[name] === undefined ||
            !uriRegex.test(httpObj[name])) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateMethod(httpObj) {
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let name = 'method';

        if (httpObj[name] === undefined ||
            !validMethods.includes(httpObj[name])) {
            throw new Error('Invalid request header: Invalid Method')
        }
    }

}

console.log((solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})));


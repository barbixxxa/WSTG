const webSecurityTestCodes = [{
    category: "Information Gathering", codes: [
        { code: "WSTG-INFO-01", description: "Conduct Search Engine Discovery Reconnaissance for Information Leakage" },
        { code: "WSTG-INFO-02", description: "Fingerprint Web Server" },
        { code: "WSTG-INFO-03", description: "Review Webserver Metafiles for Information Leakage" },
        { code: "WSTG-INFO-04", description: "Enumerate Applications on Webserver" },
        { code: "WSTG-INFO-05", description: "Review Webpage Content for Information Leakage" },
        { code: "WSTG-INFO-06", description: "Identify application entry points" },
        { code: "WSTG-INFO-07", description: "Map execution paths through application" },
        { code: "WSTG-INFO-08", description: "Fingerprint Web Application Framework" },
        { code: "WSTG-INFO-09", description: "Fingerprint Web Application" },
        { code: "WSTG-INFO-10", description: "Map Application Architecture" }]
}, {
    category: "Configuration and Deploy Management Testing", codes: [
        { code: "WSTG-CONF-01", description: "Test Network Infrastructure Configuration" }, { code: "WSTG-CONF-02", description: "Test Application Platform Configuration" }, { code: "WSTG-CONF-03", description: "Test File Extensions Handling for Sensitive Information" }, { code: "WSTG-CONF-04", description: "Review Old Backup and Unreferenced Files for Sensitive Information" }, { code: "WSTG-CONF-05", description: "Enumerate Infrastructure and Application Admin Interfaces" }, { code: "WSTG-CONF-06", description: "Test HTTP Methods" }, { code: "WSTG-CONF-07", description: "Test HTTP Strict Transport Security" }, { code: "WSTG-CONF-08", description: "Test RIA cross domain policy" }, { code: "WSTG-CONF-09", description: "Test File Permission" }, { code: "WSTG-CONF-10", description: "Test for Subdomain Takeover" }, { code: "WSTG-CONF-11", description: "Test Cloud Storage" }]

}, {

    category: "Identity Management Testing", codes: [
        { code: "WSTG-IDNT-01", description: "Test Role Definitions" }, { code: "WSTG-IDNT-02", description: "Test User Registration Process" }, { code: "WSTG-IDNT-03", description: "Test Account Provisioning Process" }, { code: "WSTG-IDNT-04", description: "Testing for Account Enumeration and Guessable User Account" }, { code: "WSTG-IDNT-05", description: "Testing for Weak or unenforced username policy" }]
}, {
    category: "Authentication Testing", codes: [
        { code: "WSTG-ATHN-01", description: "Testing for Credentials Transported over an Encrypted Channel" }, { code: "WSTG-ATHN-02", description: "Testing for Default Credentials" }, { code: "WSTG-ATHN-03", description: "Testing for Weak Lock Out Mechanism" }, { code: "WSTG-ATHN-04", description: "Testing for Bypassing Authentication Schema" }, { code: "WSTG-ATHN-05", description: "Testing for Vulnerable Remember Password" }, { code: "WSTG-ATHN-06", description: "Testing for Browser Cache Weaknesses" }, { code: "WSTG-ATHN-07", description: "Testing for Weak Password Policy" }, { code: "WSTG-ATHN-08", description: "Testing for Weak Security Question Answer" }, { code: "WSTG-ATHN-09", description: "Testing for Weak Password Change or Reset Functionalities" }, { code: "WSTG-ATHN-10", description: "Testing for Weaker Authentication in Alternative Channel" }]
}, {
    category: "Authorization Testing", codes: [
        { code: "WSTG-ATHZ-01", description: "Testing Directory Traversal File Include" }, { code: "WSTG-ATHZ-02", description: "Testing for Bypassing Authorization Schema" }, { code: "WSTG-ATHZ-03", description: "Testing for Privilege Escalation" }, { code: "WSTG-ATHZ-04", description: "Testing for Insecure Direct Object References" }]
}, {
    category: "Session Management Testing", codes: [
        { code: "WSTG-SESS-01", description: "Testing for Session Management Schema" }, { code: "WSTG-SESS-02", description: "Testing for Cookies Attributes" }, { code: "WSTG-SESS-03", description: "Testing for Session Fixation" }, { code: "WSTG-SESS-04", description: "Testing for Exposed Session constiables" }, { code: "WSTG-SESS-05", description: "Testing for Cross Site Request Forgery" }, { code: "WSTG-SESS-06", description: "Testing for Logout Functionality" }, { code: "WSTG-SESS-07", description: "Testing Session Timeout" }, { code: "WSTG-SESS-08", description: "Testing for Session Puzzling" }, { code: "WSTG-SESS-09", description: "Testing for Session Hijacking" }]
}, {
    category: "Data Validation Testing", codes: [
        { code: "WSTG-INPV-01", description: "Testing for Reflected Cross Site Scripting" }, { code: "WSTG-INPV-02", description: "Testing for Stored Cross Site Scripting" }, { code: "WSTG-INPV-03", description: "Testing for HTTP Verb Tampering" }, { code: "WSTG-INPV-04", description: "Testing for HTTP Parameter Pollution" }, { code: "WSTG-INPV-05", description: "Testing for SQL Injection" }, { code: "WSTG-INPV-06", description: "Testing for LDAP Injection" }, { code: "WSTG-INPV-07", description: "Testing for XML Injection" }, { code: "WSTG-INPV-08", description: "Testing for SSI Injection" }, { code: "WSTG-INPV-09", description: "Testing for XPath Injection" }, { code: "WSTG-INPV-10", description: "Testing for IMAP SMTP Injection" }, { code: "WSTG-INPV-11", description: "Testing for Code Injection" }, { code: "WSTG-INPV-12", description: "Testing for Command Injection" }, { code: "WSTG-INPV-13", description: "Testing for Format String Injection" }, { code: "WSTG-INPV-14", description: "Testing for Incubated Vulnerability" }, { code: "WSTG-INPV-15", description: "Testing for HTTP Splitting Smuggling" }, { code: "WSTG-INPV-16", description: "Testing for HTTP Incoming Requests" }, { code: "WSTG-INPV-17", description: "Testing for Host Header Injection" }, { code: "WSTG-INPV-18", description: "Testing for Server-side Template Injection" }, { code: "WSTG-INPV-19", description: "Testing for Server-Side Request Forgery" }]
}, {
    category: "Error Handling", codes: [
        { code: "WSTG-ERRH-01", description: "Testing for Improper Error Handling" }, { code: "WSTG-ERRH-02", description: "Testing for Stack Traces" }]
}, {
    category: "Cryptography", codes: [
        { code: "WSTG-CRYP-01", description: "Testing for Weak Transport Layer Security" }, { code: "WSTG-CRYP-02", description: "Testing for Padding Oracle" }, { code: "WSTG-CRYP-03", description: "Testing for Sensitive Information Sent via Unencrypted Channels" }, { code: "WSTG-CRYP-04", description: "Testing for Weak Encryption" }]
}, {
    category: "Business logic Testing", codes: [
        { code: "WSTG-BUSL-01", description: "Test Business Logic Data Validation" }, { code: "WSTG-BUSL-02", description: "Test Ability to Forge Requests" }, { code: "WSTG-BUSL-03", description: "Test Integrity Checks" }, { code: "WSTG-BUSL-04", description: "Test for Process Timing" }, { code: "WSTG-BUSL-05", description: "Test Number of Times a Function Can be Used Limits" }, { code: "WSTG-BUSL-06", description: "Testing for the Circumvention of Work Flows" }, { code: "WSTG-BUSL-07", description: "Test Defenses Against Application Mis-use" }, { code: "WSTG-BUSL-08", description: "Test Upload of Unexpected File Types" }, { code: "WSTG-BUSL-09", description: "Test Upload of Malicious Files" }]
}, {
    category: "Client Side Testing", codes: [
        { code: "WSTG-CLNT-01", description: "Testing for DOM-Based Cross Site Scripting" }, { code: "WSTG-CLNT-02", description: "Testing for JavaScript Execution" }, { code: "WSTG-CLNT-03", description: "Testing for HTML Injection" }, { code: "WSTG-CLNT-04", description: "Testing for Client Side URL Redirect" }, { code: "WSTG-CLNT-05", description: "Testing for CSS Injection" }, { code: "WSTG-CLNT-06", description: "Testing for Client Side Resource Manipulation" }, { code: "WSTG-CLNT-07", description: "Test Cross Origin Resource Sharing" }, { code: "WSTG-CLNT-08", description: "Testing for Cross Site Flashing" }, { code: "WSTG-CLNT-09", description: "Testing for Clickjacking" }, { code: "WSTG-CLNT-10", description: "Testing WebSockets" }, { code: "WSTG-CLNT-11", description: "Test Web Messaging" }, { code: "WSTG-CLNT-12", description: "Testing Browser Storage" }, { code: "WSTG-CLNT-13", description: "Testing for Cross Site Script Inclusion" }]
}, {
    category: "API Testing", codes: [
        { code: "WSTG-APIT-01", description: "Testing GraphQL" }]
}];

const output = [];
const container = document.getElementById("container");

webSecurityTestCodes.forEach(({ category, codes }) => {

    const title = document.createElement('h3');
    title.innerText = category;
    container.appendChild(title);

    const codeInputs = codes.map(({ code, description }) => {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = code;
        checkbox.value = `${code.substring(0, 12)}`;
        checkbox.id = code;
        checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                output.push(checkbox.value);
                document.getElementById("p-output").value = output;
            } else {
                output.splice(output.indexOf(checkbox.value), 1);
                document.getElementById("p-output").value = output;
            }
        });

        const label = document.createElement('label');
        label.htmlFor = code;
        label.textContent = '[' + code + '] ' + description;

        const containerDiv = document.createElement('div');
        containerDiv.append(checkbox, label);

        return containerDiv;
    });
    container.append(...codeInputs);
});
var codigos = ["Information Gathering",
    "WSTG-INFO-01 --- Conduct Search Engine Discovery Reconnaissance for Information Leakage",
    "WSTG-INFO-02 --- Fingerprint Web Server",
    "WSTG-INFO-03 --- Review Webserver Metafiles for Information Leakage",
    "WSTG-INFO-04 --- Enumerate Applications on Webserver",
    "WSTG-INFO-05 --- Review Webpage Content for Information Leakage",
    "WSTG-INFO-06 --- Identify application entry points",
    "WSTG-INFO-07 --- Map execution paths through application",
    "WSTG-INFO-08 --- Fingerprint Web Application Framework",
    "WSTG-INFO-09 --- Fingerprint Web Application",
    "WSTG-INFO-10 --- Map Application Architecture",
    "Configuration and Deploy Management Testing",
    "WSTG-CONF-01 --- Test Network Infrastructure Configuration",
    "WSTG-CONF-02 --- Test Application Platform Configuration",
    "WSTG-CONF-03 --- Test File Extensions Handling for Sensitive Information",
    "WSTG-CONF-04 --- Review Old Backup and Unreferenced Files for Sensitive Information",
    "WSTG-CONF-05 --- Enumerate Infrastructure and Application Admin Interfaces",
    "WSTG-CONF-06 --- Test HTTP Methods",
    "WSTG-CONF-07 --- Test HTTP Strict Transport Security",
    "WSTG-CONF-08 --- Test RIA cross domain policy",
    "WSTG-CONF-09 --- Test File Permission",
    "WSTG-CONF-10 --- Test for Subdomain Takeover",
    "WSTG-CONF-11 --- Test Cloud Storage",
    "Identity Management Testing",
    "WSTG-IDNT-01 --- Test Role Definitions",
    "WSTG-IDNT-02 --- Test User Registration Process",
    "WSTG-IDNT-03 --- Test Account Provisioning Process",
    "WSTG-IDNT-04 --- Testing for Account Enumeration and Guessable User Account",
    "WSTG-IDNT-05 --- Testing for Weak or unenforced username policy",
    "Authentication Testing",
    "WSTG-ATHN-01 --- Testing for Credentials Transported over an Encrypted Channel",
    "WSTG-ATHN-02 --- Testing for Default Credentials",
    "WSTG-ATHN-03 --- Testing for Weak Lock Out Mechanism",
    "WSTG-ATHN-04 --- Testing for Bypassing Authentication Schema",
    "WSTG-ATHN-05 --- Testing for Vulnerable Remember Password",
    "WSTG-ATHN-06 --- Testing for Browser Cache Weaknesses",
    "WSTG-ATHN-07 --- Testing for Weak Password Policy",
    "WSTG-ATHN-08 --- Testing for Weak Security Question Answer",
    "WSTG-ATHN-09 --- Testing for Weak Password Change or Reset Functionalities",
    "WSTG-ATHN-10 --- Testing for Weaker Authentication in Alternative Channel",
    "Authorization Testing",
    "WSTG-ATHZ-01 --- Testing Directory Traversal File Include",
    "WSTG-ATHZ-02 --- Testing for Bypassing Authorization Schema",
    "WSTG-ATHZ-03 --- Testing for Privilege Escalation",
    "WSTG-ATHZ-04 --- Testing for Insecure Direct Object References",
    "Session Management Testing",
    "WSTG-SESS-01 --- Testing for Session Management Schema",
    "WSTG-SESS-02 --- Testing for Cookies Attributes",
    "WSTG-SESS-03 --- Testing for Session Fixation",
    "WSTG-SESS-04 --- Testing for Exposed Session Variables",
    "WSTG-SESS-05 --- Testing for Cross Site Request Forgery",
    "WSTG-SESS-06 --- Testing for Logout Functionality",
    "WSTG-SESS-07 --- Testing Session Timeout",
    "WSTG-SESS-08 --- Testing for Session Puzzling",
    "WSTG-SESS-09 --- Testing for Session Hijacking",
    "Data Validation Testing",
    "WSTG-INPV-01 --- Testing for Reflected Cross Site Scripting",
    "WSTG-INPV-02 --- Testing for Stored Cross Site Scripting",
    "WSTG-INPV-03 --- Testing for HTTP Verb Tampering",
    "WSTG-INPV-04 --- Testing for HTTP Parameter Pollution",
    "WSTG-INPV-05 --- Testing for SQL Injection",
    "WSTG-INPV-06 --- Testing for LDAP Injection",
    "WSTG-INPV-07 --- Testing for XML Injection",
    "WSTG-INPV-08 --- Testing for SSI Injection",
    "WSTG-INPV-09 --- Testing for XPath Injection",
    "WSTG-INPV-10 --- Testing for IMAP SMTP Injection",
    "WSTG-INPV-11 --- Testing for Code Injection",
    "WSTG-INPV-12 --- Testing for Command Injection",
    "WSTG-INPV-13 --- Testing for Format String Injection",
    "WSTG-INPV-14 --- Testing for Incubated Vulnerability",
    "WSTG-INPV-15 --- Testing for HTTP Splitting Smuggling",
    "WSTG-INPV-16 --- Testing for HTTP Incoming Requests",
    "WSTG-INPV-17 --- Testing for Host Header Injection",
    "WSTG-INPV-18 --- Testing for Server-side Template Injection",
    "WSTG-INPV-19 --- Testing for Server-Side Request Forgery",
    "Error Handling",
    "WSTG-ERRH-01 --- Testing for Improper Error Handling",
    "WSTG-ERRH-02 --- Testing for Stack Traces",
    "Cryptography",
    "WSTG-CRYP-01 --- Testing for Weak Transport Layer Security",
    "WSTG-CRYP-02 --- Testing for Padding Oracle",
    "WSTG-CRYP-03 --- Testing for Sensitive Information Sent via Unencrypted Channels",
    "WSTG-CRYP-04 --- Testing for Weak Encryption",
    "Business logic Testing",
    "WSTG-BUSL-01 --- Test Business Logic Data Validation",
    "WSTG-BUSL-02 --- Test Ability to Forge Requests",
    "WSTG-BUSL-03 --- Test Integrity Checks",
    "WSTG-BUSL-04 --- Test for Process Timing",
    "WSTG-BUSL-05 --- Test Number of Times a Function Can be Used Limits",
    "WSTG-BUSL-06 --- Testing for the Circumvention of Work Flows",
    "WSTG-BUSL-07 --- Test Defenses Against Application Mis-use",
    "WSTG-BUSL-08 --- Test Upload of Unexpected File Types",
    "WSTG-BUSL-09 --- Test Upload of Malicious Files",
    "Client Side Testing",
    "WSTG-CLNT-01 --- Testing for DOM-Based Cross Site Scripting",
    "WSTG-CLNT-02 --- Testing for JavaScript Execution",
    "WSTG-CLNT-03 --- Testing for HTML Injection",
    "WSTG-CLNT-04 --- Testing for Client Side URL Redirect",
    "WSTG-CLNT-05 --- Testing for CSS Injection",
    "WSTG-CLNT-06 --- Testing for Client Side Resource Manipulation",
    "WSTG-CLNT-07 --- Test Cross Origin Resource Sharing",
    "WSTG-CLNT-08 --- Testing for Cross Site Flashing",
    "WSTG-CLNT-09 --- Testing for Clickjacking",
    "WSTG-CLNT-10 --- Testing WebSockets",
    "WSTG-CLNT-11 --- Test Web Messaging",
    "WSTG-CLNT-12 --- Testing Browser Storage",
    "WSTG-CLNT-13 --- Testing for Cross Site Script Inclusion",
    "API Testing",
    "WSTG-APIT-01 --- Testing GraphQL"]

var output = []

var container = document.getElementById("container");

codigos.forEach(element => {
    if (element.startsWith("WSTG")) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = element;
        checkbox.value = element.substring(0, 12);
        checkbox.id = element;

        checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                output.push(checkbox.value);
                document.getElementById("p-output").value = output;
            } else {
                output.splice(output.indexOf(checkbox.value), 1);
                document.getElementById("p-output").value = output;
            }
        })

        container.appendChild(checkbox);

        var label = document.createElement('label')
        label.htmlFor = element;
        label.textContent = element;
        container.appendChild(label);
        container.appendChild(document.createElement('br'))
    } else {
        var title = document.createElement('h3');
        title.innerText = element;
        container.appendChild(title)
    }

});
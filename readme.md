# Dynamics Renumerator

![Dynamics Renumerator](/res/img/logo120x120.png)

## Overview

Tool to renumber Dynamics (AL) solution from one range of IDs to another.

The source of IDs for renumeration is nHanced ID Manager Dynamics application to which Dynamics Renumerator connects through API (REST web service).

## Usage

```
node main.js "{solution_folder_path}" [-sfp "{settings_file_path}"] [-de [-ddp "{diagnostic_directory_path}"]]
```

Where:

| Parameter               | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| {solution_folder_path}  | Path to a folder with solution to be renumbered              |
| -sfp {settings_file_path} | Path to settings file (if not provided, "settings.json" file from "main.js" folder is used) |
| -de                      | Diagnostics enabled - the application starts providing more detailed information about its activities |
| -ddp {diagnostic_directory_path} | Optional diagnostic directory path where the application dumps some extra debug information (as files) |

## Settings

Settings are stored in a JSON file. As default, "settings.json" file (from main folder) is used.

```
{
    "general" : {
        "renumerationCode": "{renumeration_code}",
        "endOfLineType": "{end_of_line_type}"
    },
    "ignore": {
        "directories": [
            "{directory_ignore_pattern}",
            "{directory_ignore_pattern}",
            ...
        ],
        "files": [
            "{file_ignore_pattern}",
            "{file_ignore_pattern}",
            ...
        ]
    },
    "dynamicsWebService": {
        "protocol": "{protocol}",
        "server": "{server}",
        "port": {port},
        "instance": "{instance}",
        "user": "{user}",
        "password": "{password}",
        "apiPublisher": "the365People",
        "apiGroup": "nHancedIdManager",
        "apiVersion": "1.0",
        "companyId": "{company_id}"
    }
}
```

Where:

| Parameter                  | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| {renumeration_code}       | Code of renumeration which has to exist in nHanced ID Manager. Renumeration holds information about target range used to renumber all objects |
| {end_of_line_type}         | End of line type applied to renumbered files. There are the following choices:<br />- windows: Windows end of line is used (CR LF or  /r/n) <br />- linux: Linux end of line is used (LF or /n) |
| {directory_ignore_pattern} | Pattern for a directory to be ignored. Characters like "*" and "?" can be used |
| {file_ignore_pattern}      | SImilar pattern for files                                    |
| {protocol}                 | Protocol used for connecting to a web service. There are the following choices:<br />- http: Standard HTTP protocol,<br />- https: Secure HTTPS protocol |
| {server}                   | Address of the server hosting web services                   |
| {port}                     | Port of web services service                                 |
| {instance}                 | Web services service instance                                |
| {user}                     | User for web service authentication                          |
| {password}                 | Password for web service authentication                      |
| {company_id}               | ID (GUID) of a company in ID manager databaase               |

## Changelog

### Version 2

#### 2.2.0 - 21/01/2022 - JH
- New dependencies, new libraries

#### 2.1.0 - 19/10/2021 - JH
- Better progress information  
- Using libraries (modules)

#### 2.0.0 - 22/09/2021 - JH
- First new generation version working
- Connecting to ID manager via web services
- Translating manifests, AL files, permission set files

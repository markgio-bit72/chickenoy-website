# Code Citations

## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Trzocha/ProjektWWW/blob/7fd91afbd13bb13c9d8870128407982783288dcc/ProjektPortfolio/public_html/GlownaGry.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


## License: unknown
https://github.com/Fellous/Fellous.github.io/blob/82bd995ebe5124fe9c21efe58441bc65326a4f7f/ProjetJSBufeteau/ProjetJS.V2/HTML/choix.html

```
The error says the task "Start Backend Server" hasn't exited and doesn't have a `problemMatcher` defined. This is a VS Code debugger configuration issue.

---

## ✅ Fix: Update or remove the problematic task

Open `c:\FriedChicken\Backend\.vscode\launch.json` and replace it with this:

````json
// filepath: c:\FriedChicken\Backend\.vscode\launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Node: Current File",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
````

---

## ✅ Also update `tasks.json` if it exists

If you have `c:\FriedChicken\.vscode\tasks.json`, replace it with:

````json
// filepath: c:\FriedChicken\.vscode\tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend Server",
      "type": "shell",
      "command": "npm",
      "args": ["start"],
      "cwd": "${workspaceFolder}/Backend",
      "isBackground": true,
      "problemMatcher": {
        "pattern": {
          "regexp": "^.*error.*$",
          "file": 1,
          "location": 2,
          "message": 3
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "^.*npm start.*$",
          "endsPattern": "^.*Server running.*$"
        }
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
````

---

## ✅ Now simply start the server manually (no debugger)

In the terminal at `c:\FriedChicken\Backend`, just run:

```powershell
npm start
```

You should see:
- ✅ `MongoDB connected to mongodb://127.0.0.1:27017/Chickenoy`
- ✅ `✅ Server running on port 5000`

---

## ✅ Update your `index.html` with the complete navbar

Replace `c:\FriedChicken\Frontend\Page\index.html`:

````html
<!-- filepath: c:\FriedChicken\Frontend\Page\index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Chickenoy</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
  <nav>
```


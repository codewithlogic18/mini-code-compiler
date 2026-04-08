function runCode() {
    let code = document.getElementById("code").value;

    if(code.includes("System.out.println")) {
        let outputText = code.match(/System.out.println\("(.*)"\)/);
        
        if(outputText) {
            document.getElementById("output").innerText = outputText[1];
        } else {
            document.getElementById("output").innerText = "Invalid format";
        }
    } else {
        document.getElementById("output").innerText = "Write valid Java print statement";
    }
}
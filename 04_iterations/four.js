const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift  by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["cpp", "js", "py", "java", "rb"]

for (const key in programming) {
    console.log(key);
}


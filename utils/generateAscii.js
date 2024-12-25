import figlet from "figlet";
import chalk from "chalk";

export const generateAscii = async (req,res) =>{
    try{
        const {text,font} = req.body;
        const figletText = figlet.textSync(
                    text,
                {
                    font: font,
                    horizontalLayout: "full",
                    verticalLayout: "default",
                    width: 150,
                    whitespaceBreak: true,
                },
                function (err, data) {
                    if (err) {
                    console.log("Something went wrong...");
                    console.dir(err);
                    return;
                    }
                    // console.log(data);
                }

        )
        // console.log(figletText);
        res.send(figletText);
    }catch{
        console.log("error");
    }
}
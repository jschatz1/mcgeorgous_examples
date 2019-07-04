import check from "mcgorgeous"

const sitesSchema = [{ name: "string" }];
const sitesData = [{ name: "Jeff" }, { name: "Gary" }];
let checkData;
try{
	checkData = check(sitesSchema, sitesData);
} catch(e) {
	checkData = e.message;
}
document.body.innerHTML = `<p>Checking data: ${checkData === true ? "good to go!" : checkData}</p>`
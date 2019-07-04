import check from "mcgorgeous"

const sitesSchema = [{ name: "string", id: "number notnull", free: "boolean notnull" }];
const siteData = [{ name: "Jeff", id: 24601, free: true }, { name: "Gary", id: 22500, free: false }];
let checkData;
try{
	checkData = check(sitesSchema, siteData);
} catch(e) {
	checkData = e.message;
}
document.body.innerHTML = `
	<p>Checking data: ${checkData === true ? "good to go!" : checkData}</p>
	<pre>${JSON.stringify(sitesSchema, null, '\t')}</pre>
	<pre>${JSON.stringify(siteData, null, '\t')}</pre>
`
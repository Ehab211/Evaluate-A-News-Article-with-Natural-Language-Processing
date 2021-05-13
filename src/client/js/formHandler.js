"use strict";
function handleSubmit(event) {
  // to prevent reload on submitted
  event.preventDefault();
  // Get url value
  let urlValue = document.getElementById("url").value;
  // check url
  if (Client.urlChecker(urlValue)) {
    console.log("::: Form Submitted :::");
    // connect to server to post data that server get it 
    postData("http://localhost:8081/add_url", { url: urlValue }).then(
      (newData) => {
        //     text: data.sentence_list[0].text,
        //     score_tag: data.score_tag,
        //     agreement: data.agreement,
        //     subjectivity: data.subjectivity,
        //     confidence: data.confidence,
        //     irony: data.irony,
        /* Show data in Dom */
        document.getElementById(
          "text"
        ).innerHTML = `text: ${newData.sentence_list[0].text}`;
        document.getElementById(
          "score_tag"
        ).innerHTML = `Polarity: ${newData.score_tag}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${newData.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${newData.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${newData.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${newData.irony}`;
      }
    );
  } else {
    alert("invalid URL, please try with a valid URL.");
  }
}
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error from handler ::: ", error);
    // appropriately handle the error
  }
};
export { handleSubmit };
 
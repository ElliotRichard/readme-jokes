const width = '100%';
const height = '100%';
const svgWidth = '100%';

// Question-Answer type card
const qnaCard = (qColor, aColor, bg, borderColor, codeColor, question, answer, hideBorder) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = '2px solid transparent';
  }
  const card = `
  <svg width="${svgWidth}" viewbox="0 0 90 100" preserveAspectRatio="xMaxYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="${width}" height="${height}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .container {
            border: ${border};
            border-radius: 10px;
            background: ${bg};
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .question {
            color: ${qColor};
          }
          .answer {
            color: ${aColor};
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <div class="text">
            <p class="question"><b>Q.</b> ${question}</p>
            <p class="answer"><b>A.</b> ${answer} </p>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>`;
  return card;
};

// Quotation type card
const quoteCard = (textColor, bg, borderColor, codeColor, qoute, hideBorder) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = '2px solid transparent';
  }
  const card = `
  <svg width="${svgWidth}" viewbox="0 0 90 100" preserveAspectRatio="xMaxYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="${width}" height="${height}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .container {
            border: ${border};
            border-radius: 10px;
            background: ${bg};
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .quote {
            color: ${textColor};
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <div class="text">
            <p class="quote">${qoute}</p>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
  `;
  return card;
};

module.exports = {
  qnaCard,
  quoteCard,
};

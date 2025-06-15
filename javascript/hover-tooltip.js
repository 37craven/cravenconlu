document.querySelectorAll(".tooltip").forEach((el) => {
  let tooltipSpan;
  el.addEventListener("mouseenter", function (e) {
    const title = el.getAttribute("title");
    if (!title) return;
    el.setAttribute("data-tipText", title);
    el.removeAttribute("title");

    tooltipSpan = document.createElement("span");
    tooltipSpan.className = "title";
    tooltipSpan.textContent = title;
    el.appendChild(tooltipSpan);

    const rect = el.getBoundingClientRect(); /* this offsets the tooltip to the right and up */
    tooltipSpan.style.top = e.clientY - rect.top + -230 + "px";
    tooltipSpan.style.left = e.clientX - rect.left + 300 + "px"; 
  });

  el.addEventListener("mousemove", function (e) {
    if (!tooltipSpan) return;
    const rect = el.getBoundingClientRect();
    tooltipSpan.style.top = e.clientY - rect.top + -230 + "px";
    tooltipSpan.style.left = e.clientX - rect.left + 300 + "px"; 
  });

  el.addEventListener("mouseleave", function () {
    if (tooltipSpan) {
      tooltipSpan.remove();
      tooltipSpan = null;
    }
    const tipText = el.getAttribute("data-tipText");
    if (tipText) {
      el.setAttribute("title", tipText);
      el.removeAttribute("data-tipText");
    }
  });
});

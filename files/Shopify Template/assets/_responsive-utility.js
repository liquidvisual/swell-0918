/*
    RESPONSIVE-UTILITY.JS - (updated: 26.06.24, 23.08.18)
*/
//-----------------------------------------------------------------
// Responsive Utility
//-----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //-----------------------------------------------------------------
    // Variables
    //-----------------------------------------------------------------

    const breakpoints = {};
    const temporaryArray = ["xs", "sm", "md", "lg", "xl", "xxl"];

    //-----------------------------------------------------------------
    // Draw Responsive Table
    // Use meta data stored on the body by Sass
    //-----------------------------------------------------------------

    function getBreakpoints() {
        let tableString = "";
        const bodyMetaString = window
            .getComputedStyle(document.body)
            .getPropertyValue("content");
        const breakpointsArray = bodyMetaString
            .replace(/\\a/g, "")
            .replace(/ /g, "")
            .replace(/['"]/g, "")
            .split("|");

        // Create breakpoints object from meta on body
        // Example: obj = { xs: 0, sm: 540 }
        breakpointsArray.forEach((breakpoint, i) => {
            breakpoints[temporaryArray[i]] = Number(
                breakpoint.replace("px", "")
            );
            tableString += `<tr><td>${temporaryArray[i]}</td><td>${breakpoint}</td></tr>`;
        });

        // Output to DOM
        const tableElement = `<table class="table breakpoints-table" style="width: 300px;">${tableString}</table>`;
        const responsiveTable = document.querySelector(
            '[data-js="lv-responsive-table"]'
        );
        if (responsiveTable) {
            responsiveTable.insertAdjacentHTML("beforeend", tableElement);
        } else {
            console.error(
                'Element with [data-js="lv-responsive-table"] not found.'
            );
        }

        // console.log(breakpoints);
    }

    getBreakpoints();

    //-----------------------------------------------------------------
    // Display Responsive Helper
    //-----------------------------------------------------------------

    function responsiveHelper() {
        const body = document.body;

        if (document.querySelectorAll(".lv-screen-data").length !== 1) {
            const screenDataDiv = document.createElement("div");
            screenDataDiv.className = "lv-screen-data";
            body.appendChild(screenDataDiv);
        }

        const screenWidth = window.innerWidth; // NEW - chrome, firefox, opera
        const screenHeight = window.innerHeight;

        const queryWidth = window.innerWidth; // old
        const queryHeight = window.innerHeight;

        let chromeScreen = "";
        let safariScreen = "";

        if (screenWidth < breakpoints.sm) chromeScreen = "xs";
        else if (screenWidth < breakpoints.md) chromeScreen = "sm";
        else if (screenWidth < breakpoints.lg) chromeScreen = "md";
        else if (screenWidth < breakpoints.xl) chromeScreen = "lg";
        else chromeScreen = "xl";

        if (queryWidth < breakpoints.sm) safariScreen = "xs";
        else if (queryWidth < breakpoints.md) safariScreen = "sm";
        else if (queryWidth < breakpoints.lg) safariScreen = "md";
        else if (queryWidth < breakpoints.xl) safariScreen = "lg";
        else safariScreen = "xl";

        const lvScreenData = document.querySelector(".lv-screen-data");
        lvScreenData.innerHTML = `${queryWidth} x ${queryHeight}<br><small>${screenWidth} x ${screenHeight}</small><br>${chromeScreen}  [${safariScreen}]`;
        lvScreenData.style.cssText = `
            position: fixed;
            top: 0;
            padding: 5px 10px;
            background: rgba(0,0,0,0.5);
            font-family: Helvetica Neue;
            font-size: 14px;
            color: white;
            z-index: 2147483646;
        `;
        lvScreenData.addEventListener("click", () => {
            body.classList.toggle("developer");
        });
    }

    // RUN
    responsiveHelper();
    window.addEventListener("resize", responsiveHelper);
});

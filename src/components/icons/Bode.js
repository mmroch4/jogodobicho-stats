import * as React from "react";

const SvgBode = (props) => (
  <svg
    width={40}
    height={57}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#bode_svg__a)" d="M0 0h40v56.87H0z" />
    <defs>
      <pattern
        id="bode_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#bode_svg__b" transform="scale(.00435 .00306)" />
      </pattern>
      <image
        id="bode_svg__b"
        width={230}
        height={327}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAFHCAYAAAC1XTBEAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAa9aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQzNTIsIDIwMjAvMDEvMzAtMTU6NTA6MzggICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDYtMTRUMjE6MzM6MzArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA2LTE5VDE4OjU3OjA0KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTE5VDE4OjU3OjA0KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWVkNWMxYWYtY2QwZS04MDQ4LTk5NmItYjQzOGNjYmJhZjE2IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODI2MjdiNDgtYzJmNS1mZDQ1LTgyZjUtMjc4MDMwODIxMmY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y5MTdjNTctN2MxYi0xZDQzLTkwZjMtNjg2YWVmNDNkMTZkIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjkxN2M1Ny03YzFiLTFkNDMtOTBmMy02ODZhZWY0M2QxNmQiIHN0RXZ0OndoZW49IjIwMjItMDYtMTRUMjE6MzM6MzArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2JhYzllMTctYjUyOS04NDQyLWE1YmUtZDQ1YjMwOTA3YTRmIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTE0VDIxOjM3OjI5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0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"
      />
    </defs>
  </svg>
);

export default SvgBode;
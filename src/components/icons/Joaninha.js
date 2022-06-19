import * as React from "react";

const SvgJoaninha = (props) => (
  <svg
    width={40}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#joaninha_svg__a)" d="M0 0h40v42.305H0z" />
    <defs>
      <pattern
        id="joaninha_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#joaninha_svg__b" transform="scale(.00339 .0032)" />
      </pattern>
      <image
        id="joaninha_svg__b"
        width={295}
        height={312}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAE4CAYAAAAZ2jUPAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAa9aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQzNTIsIDIwMjAvMDEvMzAtMTU6NTA6MzggICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDYtMTRUMjI6NTY6MzcrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA2LTE5VDE4OjUyOjU3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTE5VDE4OjUyOjU3KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDU4YTk5NGItOTFjNC04YzQxLTg1NGQtYTRlOGRjYzdjYWY4IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzQ2MTY3MzMtNGY2Yy03MTRkLWI2MjYtOTJhZGUxOGRlM2VlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODE2OGYwZmYtOWRhNi0zMDQzLWI1NzktODU2NDA3MmU2OTgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTY4ZjBmZi05ZGE2LTMwNDMtYjU3OS04NTY0MDcyZTY5ODMiIHN0RXZ0OndoZW49IjIwMjItMDYtMTRUMjI6NTY6MzcrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmY1N2VjMTAtNWJiMS0wNjQ5LTgwYjQtY2IzY2ZiMDVjMjMzIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTE0VDIzOjAzOjQ2KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0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"
      />
    </defs>
  </svg>
);

export default SvgJoaninha;
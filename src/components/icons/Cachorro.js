import * as React from "react";

const SvgCachorro = (props) => (
  <svg
    width={40}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#cachorro_svg__a)" d="M0 0h40v42.363H0z" />
    <defs>
      <pattern
        id="cachorro_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#cachorro_svg__b" transform="scale(.00422 .00398)" />
      </pattern>
      <image
        id="cachorro_svg__b"
        width={237}
        height={251}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAAD7CAYAAACGwhMJAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAa9aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQzNTIsIDIwMjAvMDEvMzAtMTU6NTA6MzggICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDYtMTRUMjE6MzM6MzArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA2LTE5VDE4OjU2OjUwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTE5VDE4OjU2OjUwKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjY4NTRlMGQtZTk1ZC01MDQ3LThlMzUtNzZhN2M4MjFlNjkyIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmM3ZTcyMzQtNTE1Zi0wNjQ0LTk2Y2QtY2RkYzI1NzE2YWYwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmE0MzM5NTUtMjEyMi1jODQ0LWJmZmYtNDhmZDZlZWFjMjYyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYTQzMzk1NS0yMTIyLWM4NDQtYmZmZi00OGZkNmVlYWMyNjIiIHN0RXZ0OndoZW49IjIwMjItMDYtMTRUMjE6MzM6MzArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTE0MjM5MmEtM2IyYy03NzRjLWE4YjgtZTRhMjNmYjA1OTU4IiBzdEV2dDp3aGVuPSIyMDIyLTA2LTE0VDIxOjM4OjU1KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0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"
      />
    </defs>
  </svg>
);

export default SvgCachorro;
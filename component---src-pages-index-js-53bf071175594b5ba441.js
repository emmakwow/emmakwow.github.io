"use strict";
(self.webpackChunkekj_ink = self.webpackChunkekj_ink || []).push([
  [678],
  {
    4176: function (e, t, i) {
      i.r(t),
        i.d(t, {
          Head: function () {
            return m;
          },
          default: function () {
            return p;
          },
        });
      var l = i(7294);
      const o = [
          {
            title: "Uist",
            url: "https://www.elsewhere-journal.com/blog/2022/2/7/uist ",
            publisher: "Elsewhere: A Journal of Place",
          },
          {
            title: "Photography: A  Feminist History",
            url: "https://www.hachette.co.uk/titles/emma-lewis-2/photography-%e2%80%93-a-feminist-history/9781781578049/",
            publisher: "Octopush Publishing Group (UK), Chronicle Books (US)",
          },
          {
            title: "Jonny Briggs: Beyond the Frame ",
            url: "https://www.lessenzialestudiojournal.com/store/",
            publisher: "L'Essenziale Studio Journal",
          },
          {
            title:
              "Psychic Gasoline: Bikepacking and Zen and the Art of Motorcyle Maitenance",
            url: "https://theradavist.com/zen-and-bikepacking/",
            publisher: "The Radavist",
          },
          {
            title: "Liz Orton: Every Body is an Archive",
            url: "https://c4journal.com/liz-orton-every-body-is-an-archive/",
            publisher: "C4 Journal",
          },
          {
            title: "The Woman in the Bath",
            url: "https://lucywritersplatform.com/2023/02/05/the-woman-in-the-bath-by-emma-jones/",
            publisher: "Lucy Writers",
          },
        ],
        n = {
          color: "#232129",
          padding: 96,
          fontFamily: "-apple-system, Roboto, sans-serif, serif",
        },
        r = { marginTop: 0, marginBottom: 64, maxWidth: 320 },
        a = { marginBottom: 96, paddingLeft: 0 },
        s = { fontWeight: 300, fontSize: 24, maxWidth: 560, marginBottom: 30 },
        h = {
          color: "#8954A8",
          fontWeight: "bold",
          fontSize: 16,
          verticalAlign: "5%",
        },
        c = {
          color: "#232129",
          fontSize: 14,
          marginTop: 10,
          marginBottom: 0,
          lineHeight: 1.25,
        },
        u = {
          color: "#fff",
          backgroundColor: "#088413",
          border: "1px solid #088413",
          fontSize: 11,
          fontWeight: "bold",
          letterSpacing: 1,
          borderRadius: 4,
          padding: "4px 6px",
          display: "inline-block",
          position: "relative",
          top: -2,
          marginLeft: 10,
          lineHeight: 1,
        };
      var p = () =>
        l.createElement(
          "main",
          { style: n },
          l.createElement("h1", { style: r }, "EKJ"),
          l.createElement(
            "ul",
            { style: a },
            o.map((e) =>
              l.createElement(
                "li",
                { key: e.url, style: { ...s, color: e.color } },
                l.createElement(
                  "span",
                  null,
                  l.createElement("a", { style: h, href: e.url }, e.title),
                  e.badge &&
                    l.createElement(
                      "span",
                      { style: u, "aria-label": "New Badge" },
                      "NEW!"
                    ),
                  l.createElement("p", { style: c }, e.publisher)
                )
              )
            )
          )
        );
      const m = () => l.createElement("title", null, "EKJ");
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-53bf071175594b5ba441.js.map

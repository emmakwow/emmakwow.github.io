"use strict";
(self.webpackChunkekj_ink = self.webpackChunkekj_ink || []).push([
  [678],
  {
    1270: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Head: function () {
            return d;
          },
          default: function () {
            return f;
          },
        });
      var i = n(7294);
      const a = [
          {
            title: "Uist",
            url: "https://www.elsewhere-journal.com/blog/2022/2/7/uist",
            publisher: "Elsewhere: A Journal of Place",
          },
          {
            title: "Photography: A  Feminist History",
            url: "https://www.hachette.co.uk/titles/emma-lewis-2/photography-%e2%80%93-a-feminist-history/9781781578049/",
            publisher: "Octopus Publishing Group (UK), Chronicle Books (US)",
          },
          {
            title: "Jonny Briggs: Beyond the Frame ",
            url: "https://www.lessenzialestudiojournal.com/store/#!/LEssenziale-Studio-Vol-04/p/377051852/category=0",
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
        o = [
          { title: "Curator-led tour: Dora Maar", institution: "Tate Modern" },
          {
            title: "In conversation with poet Grace Nichols",
            institution: "Uniqlo Tate Lates: Dora Maar",
          },
          {
            title: "In conversation with artist Amak Mahmoodian",
            institution: "Offprint London",
          },
          {
            title:
              "Conference paper presentation:  Photographing an Imagined Place, Lieko Shiga's 'Spiral Shore'",
            institution: "Women Talk Place",
          },
          {
            title: "Reading: The Pomegranate London launch party",
            institution: "The Pomegranate London",
          },
        ],
        r = [1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
        l = {
          background: "#FFB7C6",
          content: "#191820",
          contentAlt: "#413F4B",
        },
        s = {
          padding: r[8],
          background: "linear-gradient(180deg, #FFB7BB 0%, #FFC8B7 100%)",
          color: l.content,
        },
        h = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 1.22222,
          },
          marginTop: 0,
          marginBottom: r[8],
        },
        c = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.333333,
          },
          marginTop: r[10],
        },
        u = { paddingLeft: 0, listStyle: "none" },
        m = { maxWidth: 560, marginBottom: r[5] },
        p = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.5,
          },
          margin: 0,
          marginBottom: 0,
        },
        g = { color: l.content },
        y = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
          },
          color: l.contentAlt,
          margin: 0,
          marginTop: r[1],
        };
      var f = () =>
        i.createElement(
          "main",
          { style: s },
          i.createElement("h1", { style: h }, "EKJ"),
          i.createElement("h2", { style: c }, "Writing"),
          i.createElement(
            "ul",
            { style: u },
            a.map((e) =>
              i.createElement(
                "li",
                { key: e.url, style: { ...m } },
                i.createElement(
                  "p",
                  { style: p },
                  i.createElement(
                    "a",
                    {
                      style: g,
                      href: e.url,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                    e.title
                  )
                ),
                i.createElement("p", { style: y }, e.publisher)
              )
            )
          ),
          i.createElement("h2", { style: c }, "Talks"),
          i.createElement(
            "ul",
            { style: u },
            o.map((e) =>
              i.createElement(
                "li",
                { key: e.institution.length, style: { ...m } },
                i.createElement(
                  "span",
                  null,
                  i.createElement("p", { style: p }, e.title),
                  i.createElement("p", { style: y }, e.institution)
                )
              )
            )
          )
        );
      const d = () => i.createElement("title", null, "EKJ");
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-2a46eb77c63c7dec8fb1.js.map

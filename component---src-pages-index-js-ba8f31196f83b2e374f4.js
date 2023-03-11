"use strict";
(self.webpackChunkekj_ink = self.webpackChunkekj_ink || []).push([
  [678],
  {
    7501: function (t, e, n) {
      n.r(e),
        n.d(e, {
          Head: function () {
            return w;
          },
          default: function () {
            return f;
          },
        });
      var i = n(7294);
      const r = [
          {
            title: "The Woman in the Bath",
            url: "https://lucywritersplatform.com/2023/02/05/the-woman-in-the-bath-by-emma-jones/",
            publisher: "Lucy Writers",
          },
          {
            title: "Liz Orton: Every Body is an Archive",
            url: "https://c4journal.com/liz-orton-every-body-is-an-archive/",
            publisher: "C4 Journal",
          },
          {
            title:
              "Psychic Gasoline: Bikepacking and Zen and the Art of Motorcyle Maitenance",
            url: "https://theradavist.com/zen-and-bikepacking/",
            publisher: "The Radavist",
          },
          {
            title: "Jonny Briggs: Beyond the Frame ",
            url: "https://www.lessenzialestudiojournal.com/store/#!/LEssenziale-Studio-Vol-04/p/377051852/category=0",
            publisher: "L'Essenziale Studio Journal",
          },
          {
            title: "Photography: A  Feminist History",
            url: "https://www.hachette.co.uk/titles/emma-lewis-2/photography-%e2%80%93-a-feminist-history/9781781578049/",
            publisher: "Octopus Publishing Group (UK), Chronicle Books (US)",
          },
          {
            title: "Uist",
            url: "https://www.elsewhere-journal.com/blog/2022/2/7/uist",
            publisher: "Elsewhere: A Journal of Place",
          },
        ],
        a = [
          {
            title: "Reading: The Pomegranate London launch party",
            institution: "The Pomegranate London",
          },
          {
            title:
              "Conference paper presentation:  Photographing an Imagined Place, Lieko Shiga's 'Spiral Shore'",
            institution: "Women Talk Place",
          },
          {
            title: "In conversation with artist Amak Mahmoodian",
            institution: "Offprint London",
          },
          {
            title: "In conversation with poet Grace Nichols",
            institution: "Uniqlo Tate Lates: Dora Maar",
          },
          { title: "Curator-led tour: Dora Maar", institution: "Tate Modern" },
        ],
        o = [
          {
            title: "Šejla Kamerić",
            url: "https://www.tate.org.uk/visit/tate-modern/display/artist-and-society/bosnian-girl",
            institution: "Tate Modern",
            role: "Curator",
          },
          {
            title: "Ernest Cole",
            url: "https://www.tate.org.uk/visit/tate-modern/display/artist-and-society/ernest-cole",
            institution: "Tate Modern",
            role: "Curator",
          },
          {
            title: "Graciela Iturbide",
            url: "https://www.tate.org.uk/visit/tate-modern/display/graciela-iturbide",
            institution: "Tate Modern",
            role: "Assistant Curator",
          },
          {
            title: "Dora Maar",
            url: "https://www.tate.org.uk/whats-on/tate-modern/dora-maar",
            institution: "Tate Modern",
            role: "Assistant Curator",
          },
          {
            title: "Shape of Light: 100 Years of Photography and Abstract Art",
            url: "https://www.tate.org.uk/whats-on/tate-modern/shape-light",
            institution: "Tate Modern",
            role: "Assistant Curator",
          },
        ],
        l = [1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
        s = {
          background: "#FFB7C6",
          content: "#191820",
          contentAlt: "#413F4B",
        },
        u = {
          padding: l[8],
          background: "linear-gradient(180deg, #FFB7BB 0%, #FFC8B7 100%)",
          color: s.content,
        },
        h = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 1.22222,
          },
          marginTop: 0,
          marginBottom: l[8],
        },
        c = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.333333,
          },
          marginTop: l[10],
        },
        m = { paddingLeft: 0, listStyle: "none" },
        p = { maxWidth: 560, marginBottom: l[5] },
        g = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.5,
          },
          margin: 0,
          marginBottom: 0,
        },
        d = { color: s.content },
        y = {
          ...{
            fontFamily: "Open Sans, sans-serif, serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
          },
          color: s.contentAlt,
          margin: 0,
          marginTop: l[1],
        };
      var f = () =>
        i.createElement(
          "main",
          { style: u },
          i.createElement("h1", { style: h }, "EKJ"),
          i.createElement("h2", { style: c }, "Writing"),
          i.createElement(
            "ul",
            { style: m },
            r.map((t) =>
              i.createElement(
                "li",
                { key: t.url, style: { ...p } },
                i.createElement(
                  "p",
                  { style: g },
                  i.createElement(
                    "a",
                    {
                      style: d,
                      href: t.url,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                    t.title
                  )
                ),
                i.createElement("p", { style: y }, t.publisher)
              )
            )
          ),
          i.createElement("h2", { style: c }, "Curation"),
          i.createElement(
            "ul",
            { style: m },
            o.map((t) =>
              i.createElement(
                "li",
                { key: t.url, style: { ...p } },
                i.createElement(
                  "p",
                  { style: g },
                  i.createElement(
                    "a",
                    {
                      style: d,
                      href: t.url,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                    t.title
                  )
                ),
                i.createElement("p", { style: y }, t.role, ", ", t.institution)
              )
            )
          ),
          i.createElement("h2", { style: c }, "Talks"),
          i.createElement(
            "ul",
            { style: m },
            a.map((t) =>
              i.createElement(
                "li",
                { key: t.institution.length, style: { ...p } },
                i.createElement(
                  "span",
                  null,
                  i.createElement("p", { style: g }, t.title),
                  i.createElement("p", { style: y }, t.institution)
                )
              )
            )
          )
        );
      const w = () => i.createElement("title", null, "EKJ");
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-ba8f31196f83b2e374f4.js.map

const header = document.querySelector("header");
const main = document.querySelector("main");
const first = async (ev) => {
  console.log("first");
  kfops = [
    {
      kf: { translate: ["-100% 0", "0"] },
      op: { duration: 1000, delay: 500, fill: "both" },
    },
    {
      kf: { scale: ["1.0 1", "1.5 1"] },
      op: { duration: 1000, fill: "both" },
    },
    {
      kf: { rotate: ["0deg", "5deg", "-5deg", "5deg", "-5deg", "0deg"] },
      op: { duration: 500, fill: "both" },
    },
    {
      kf: { scale: ["1.5 1", "1.0 1"] },
      op: { duration: 500, fill: "both" },
    },
  ];
  for (const kfop of kfops) {
    let fanimate = await header.animate(kfop.kf, kfop.op).finished;
    console.log(fanimate);
  }
};

const lobserver = new IntersectionObserver((entries) => {
  entries[0].target.classList.toggle("roughano");
});
/**
 *
 * @param {Element} ele
 */
const lood = (ele) => {
  console.dir(window.innerWidth);
  if (window.innerWidth < 768) {
    lobserver.observe(ele);
  }
};

document.querySelector("svg");
// window.addEventListener("load", first);
const resize4header = (ev) => {
  main.style.marginTop = `${header.clientHeight + 16}px`;
};
window.addEventListener("resize", resize4header);
window.addEventListener("load", resize4header);
const fountain = async () => {
  const lumber = document.getElementById("lumber");
  const axe = document.getElementById("axe");
  const new_axe = document.getElementById("new_axe");
  const fay = document.querySelector(".spring img");
  console.log(await trash(fay));
  let commands = lumber.value.split("\n");
  let golden_axe = axe.value;
  commands.forEach((c) => {
    golden_axe = goddes(c, golden_axe);
  });
  new_axe.textContent = golden_axe;
  console.log(await float(fay));
};
const trash = async (fay) => {
  const trash = document.querySelector(".throw img");
  trash_rect = trash.getBoundingClientRect();
  target_rect = fay.getBoundingClientRect();
  point = `${(target_rect.x - trash.x) | 0}px ${(target_rect.y - trash.y) | 0}px`;
  console.log(point);
  const fornext = trash.animate(
    { translate: ["0 0", point], rotate: ["0deg", "3600deg"] },
    { duration: 1000, fill: "backwards" },
  );
  return fornext.finished;
};
const float = async (fay) => {
  const fornext = fay.animate(
    { scale: [1.0, 1.2], opacity: [0, 1] },
    { duration: 1000, fill: "forwards" },
  );
  return fornext.finished;
};

/**
 * use in goddes
 * @param {boolean} smile
 * @param {string[]} eyes
 * @param {string} str
 *  */
const today_face = (smile, eyes, str) => {
  if (smile) {
    return eyes.some((e) => str.includes(e));
  } else {
    return eyes.every((e) => str.includes(e));
  }
};

/**
 * use in fountain
 * @param {string} command
 * @param {string} str
 *  */
const goddes = (command, str) => {
  let colon = "&colon;";
  const [escolon, c_species, ...option] = command.split(":");
  if (escolon != "") {
    colon = escolon;
  }
  let [bf, af, io, ...tar] = option.map((e, i) => {
    return e.replace(colon, ":");
  });
  switch (c_species[0]) {
    case "c":
      str = str.replaceAll(bf, af);
      break;
    case "p":
      af = af === "" ? bf : af;
      let fragments = str
        .split(bf)
        .filter((e, i, a) => {
          return e.includes(af) || i === 0 || i === a.length;
        })
        .map((e, i, a) => {
          flag = tar.length === 0 || (io[0] != "+" && io[0] != "-");
          if (flag) {
            tmf = true;
          } else {
            smile = io.length === 2 || io?.[1] !== "a";
            tmf = tar[smile ? "some" : "every"]((t) => e.includes(t));
          }

          if (tmf) {
            const c_is_pcr = c_species === "pcr";
            const picked = e.includes(af) ? e.split(af) : [""];
            res =
              (c_is_pcr ? picked[0] : e.split(af)[0]) +
              (e.includes(af) ? af : "") +
              (!c_is_pcr && i + 1 === a.length && 1 < picked.length
                ? picked[picked.length - 1]
                : "");
            return res;
          } else {
            return "";
          }
        });

      str = fragments.join(bf);
      break;
    default:
      break;
  }
  return str;
};

class flowon {
  constructor() {
    this.now = new Date().getTime();
    const ori = String(this.now)
      .slice(-8)
      .match(/.{1,2}/g);
    this.wlens = ori.map((e) => e[0]).map(Number);
    this.wspds = ori.map((e) => e[1]).map(Number);
  }
  /**
   *
   */
  flower_path() {
    let data = "M+0+0";
    for (const [angle, element] of Array(360).fill(0).entries()) {
      let point = { x: 0, y: 0 };
      const arc = (Math.PI * 2 * angle) / 360;
      for (const [i, wlen] of this.wlens.entries()) {
        const dir = i % 2 === 0 ? -1 : 1;
        let wspd = this.wspds[i];
        point.x += (wlen + 1) * Math.cos(arc * (wspd + 1) * dir);
        point.y += (wlen + 1) * Math.sin(arc * (wspd + 1) * dir);
      }
      data += `L${point.x} ${point.y}`;
    }
    return data;
  }
}
/**
 *
 * @param {Event} ev
 */
const drawn = (ev) => {
  let flower = new flowon();
  console.log(flower);
  ev.target.firstElementChild.setAttribute("d", flower.flower_path());
};
document.querySelector("#flower").addEventListener("click", drawn);

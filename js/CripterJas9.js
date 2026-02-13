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


class flower {
  /**
   * 
   * @param {String[]} parray 
   */
  constructor(parray) {
    this.parray = parray;
    this.wlens_ori = parray.map((e) => e[0]).map(Number);
    this.max_wlen = this.wlens_ori.reduce((res, wlen) => { return res + 1 + wlen }, 0);
    this.wspds_ori = parray.map((e) => e[1]).map(Number);
    this.primes =
      [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541
      ];
    this.wspds_pistomeirp = this.wspds_ori.reduce((res, wspd_ori, index) => {
      res.push(wspd_ori + (index === 0 ? 0 : 1) + (res.at(-1) ?? 0));
      return res;
    }, []).map((e) => this.primes[e]);
    this.wspds_primesquare = this.wspds_ori.map((e, i) => this.primes[10 * i + e])
    this.wspds_primeston = this.wspds_ori.map((e) => this.primes[e])
      .reduce((res, wspd_prime) => {
        res.push(wspd_prime + (res.at(-1) ?? 0));
        return res;
      }, []);
  }
  /**
   *
   */
  path(mode = "wspds_pistomeirp") {
    let data = "M+1+0";
    const wspds = this[mode];
    const maxpd = true ? Math.max(...wspds) : 360;
    const spin = 360 / 15 * maxpd;
    for (const [angle, element] of Array(spin).fill(0).entries()) {
      let point = { x: 0, y: 0 };
      const arc = (Math.PI * 2 * angle) / (spin);
      for (const [i, wlen] of this.wlens_ori.entries()) {
        const dir = (i % 2 === 0 ? -1 : 1);
        let wspd = wspds[i];
        point.x += (wlen + 1) * Math.cos(arc * wspd * dir);
        point.y += (wlen + 1) * Math.sin(arc * wspd * dir);
      }
      data += `L${point.x / this.max_wlen} ${point.y / this.max_wlen}`;
    }
    return data + "z";
  }
}
/**
 * 
 * @param {HTMLElement} element 
 */
const drawn = (element) => {
  const now = new Date().getTime();
  const clock = String(now);
  const seed = clock.slice(0, -12)
  const calender = clock.slice(-12)
  const ori = calender.match(/.{1,2}/g);
  const aniverse = (1000 * 60 * 60 * 24 * 365.2425);
  let flowon = new flower(ori);
  console.log(flowon);
  console.log(now);
  console.log(now % aniverse);
  console.log((now % aniverse) / aniverse);
  console.log(calender / seed);
  for (const e of element.querySelectorAll("svg")) {
    console.dir(e);
    e.firstElementChild.setAttribute("d", flowon.path(e.getAttribute("mode")))
  };
  document.title = ori
};
const Flowon = document.querySelector(".Flowon");
// Flowon.addEventListener("click", drawn);

/**
 * 
 * @param {String[]} parray 
 * @param {Number} spin 
 */
const test_bloom = (parray, spin = 360) => {
  const paper = document.querySelector("#flower path");
  const test_flower = new flower(parray);
  console.log(test_flower);
  paper.setAttribute("d", test_flower.path())
};

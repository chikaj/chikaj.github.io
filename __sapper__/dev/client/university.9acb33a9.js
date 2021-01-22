import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.d3c7c466.js';

/* src/routes/university.svelte generated by Svelte v3.31.2 */

const file = "src/routes/university.svelte";

function create_fragment(ctx) {
	let t0;
	let h20;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let hr0;
	let t5;
	let h30;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let hr1;
	let t10;
	let h31;
	let t11;
	let t12;
	let p2;
	let t13;
	let t14;
	let hr2;
	let t15;
	let h32;
	let t16;
	let t17;
	let p3;
	let t18;
	let a0;
	let t19;
	let t20;
	let a1;
	let t21;
	let t22;
	let a2;
	let t23;
	let t24;
	let t25;
	let hr3;
	let t26;
	let h33;
	let t27;
	let t28;
	let p4;
	let t29;
	let a3;
	let t30;
	let t31;
	let t32;
	let h21;
	let t33;
	let t34;
	let p5;
	let t35;
	let t36;
	let hr4;
	let t37;
	let h34;
	let t38;
	let t39;
	let ul;
	let li0;
	let div0;
	let strong0;
	let t40;
	let t41;
	let span0;
	let t42;
	let t43;
	let p6;
	let t44;
	let t45;
	let li1;
	let div1;
	let strong1;
	let t46;
	let t47;
	let span1;
	let t48;
	let t49;
	let p7;
	let t50;
	let t51;
	let li2;
	let div2;
	let strong2;
	let t52;
	let t53;
	let span2;
	let t54;
	let t55;
	let p8;
	let t56;
	let t57;
	let li3;
	let div3;
	let strong3;
	let t58;
	let t59;
	let span3;
	let t60;
	let t61;
	let p9;
	let t62;

	const block = {
		c: function create() {
			t0 = space();
			h20 = element("h2");
			t1 = text("Research foci");
			t2 = space();
			p0 = element("p");
			t3 = text("I focus on GISience projects that integrate human-environment interaction.\n    I do a few other things, too.");
			t4 = space();
			hr0 = element("hr");
			t5 = space();
			h30 = element("h3");
			t6 = text("Remote Sensing");
			t7 = space();
			p1 = element("p");
			t8 = text("I do satellite image stuff!");
			t9 = space();
			hr1 = element("hr");
			t10 = space();
			h31 = element("h3");
			t11 = text("GIScience");
			t12 = space();
			p2 = element("p");
			t13 = text("I do database and spatial analysis stuff!");
			t14 = space();
			hr2 = element("hr");
			t15 = space();
			h32 = element("h3");
			t16 = text("Open Source");
			t17 = space();
			p3 = element("p");
			t18 = text("I use as many open source tools as I can! That means QGIS, of course, \n    but also Python-based tools like rasterio, scipy and TensorFlow. \n    And for development, ");
			a0 = element("a");
			t19 = text("Docker");
			t20 = text(" with \n    ");
			a1 = element("a");
			t21 = text("Django");
			t22 = text(" for the backend and \n    ");
			a2 = element("a");
			t23 = text("Svelte");
			t24 = text(" for the frontend.");
			t25 = space();
			hr3 = element("hr");
			t26 = space();
			h33 = element("h3");
			t27 = text("The Currit Lab");
			t28 = space();
			p4 = element("p");
			t29 = text("I coordinate much of my work with students in ");
			a3 = element("a");
			t30 = text("The Currit Lab");
			t31 = text(".");
			t32 = space();
			h21 = element("h2");
			t33 = text("Teaching philosophy");
			t34 = space();
			p5 = element("p");
			t35 = text("I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.\n    The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.");
			t36 = space();
			hr4 = element("hr");
			t37 = space();
			h34 = element("h3");
			t38 = text("Regularly taught University courses");
			t39 = space();
			ul = element("ul");
			li0 = element("li");
			div0 = element("div");
			strong0 = element("strong");
			t40 = text("Geographic Applications of Remote Sensing");
			t41 = space();
			span0 = element("span");
			t42 = text("(Graduate)");
			t43 = space();
			p6 = element("p");
			t44 = text("The is an accelerated course.");
			t45 = space();
			li1 = element("li");
			div1 = element("div");
			strong1 = element("strong");
			t46 = text("Exploring Spatial Databases");
			t47 = space();
			span1 = element("span");
			t48 = text("(Graduate)");
			t49 = space();
			p7 = element("p");
			t50 = text("This course begins with ontologies and geospatial semantics, advances to \n            Entity-Relationship Diagrams, and concludes with basic to advanced SQL. \n            PostgreSQL with the PostGIS geospatial extention is used in the course.");
			t51 = space();
			li2 = element("li");
			div2 = element("div");
			strong2 = element("strong");
			t52 = text("Remote Sensing and Earth Observation");
			t53 = space();
			span2 = element("span");
			t54 = text("(Undergraduate)");
			t55 = space();
			p8 = element("p");
			t56 = text("This course is an introduction to the principles and practices of orbital and sub-orbital \n            Earth Observation.");
			t57 = space();
			li3 = element("li");
			div3 = element("div");
			strong3 = element("strong");
			t58 = text("Advanced Geographic Information Systems");
			t59 = space();
			span3 = element("span");
			t60 = text("(Undergraduate)");
			t61 = space();
			p9 = element("p");
			t62 = text("This course covers advanced raster and vector analyses in a GIS environment.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1sbkf8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h20 = claim_element(nodes, "H2", {});
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, "Research foci");
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "I focus on GISience projects that integrate human-environment interaction.\n    I do a few other things, too.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", {});
			t5 = claim_space(nodes);
			h30 = claim_element(nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t6 = claim_text(h30_nodes, "Remote Sensing");
			h30_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "I do satellite image stuff!");
			p1_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", {});
			t10 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t11 = claim_text(h31_nodes, "GIScience");
			h31_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t13 = claim_text(p2_nodes, "I do database and spatial analysis stuff!");
			p2_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			hr2 = claim_element(nodes, "HR", {});
			t15 = claim_space(nodes);
			h32 = claim_element(nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t16 = claim_text(h32_nodes, "Open Source");
			h32_nodes.forEach(detach_dev);
			t17 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t18 = claim_text(p3_nodes, "I use as many open source tools as I can! That means QGIS, of course, \n    but also Python-based tools like rasterio, scipy and TensorFlow. \n    And for development, ");
			a0 = claim_element(p3_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t19 = claim_text(a0_nodes, "Docker");
			a0_nodes.forEach(detach_dev);
			t20 = claim_text(p3_nodes, " with \n    ");
			a1 = claim_element(p3_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t21 = claim_text(a1_nodes, "Django");
			a1_nodes.forEach(detach_dev);
			t22 = claim_text(p3_nodes, " for the backend and \n    ");
			a2 = claim_element(p3_nodes, "A", { href: true, target: true });
			var a2_nodes = children(a2);
			t23 = claim_text(a2_nodes, "Svelte");
			a2_nodes.forEach(detach_dev);
			t24 = claim_text(p3_nodes, " for the frontend.");
			p3_nodes.forEach(detach_dev);
			t25 = claim_space(nodes);
			hr3 = claim_element(nodes, "HR", {});
			t26 = claim_space(nodes);
			h33 = claim_element(nodes, "H3", { class: true });
			var h33_nodes = children(h33);
			t27 = claim_text(h33_nodes, "The Currit Lab");
			h33_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t29 = claim_text(p4_nodes, "I coordinate much of my work with students in ");
			a3 = claim_element(p4_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			t30 = claim_text(a3_nodes, "The Currit Lab");
			a3_nodes.forEach(detach_dev);
			t31 = claim_text(p4_nodes, ".");
			p4_nodes.forEach(detach_dev);
			t32 = claim_space(nodes);
			h21 = claim_element(nodes, "H2", {});
			var h21_nodes = children(h21);
			t33 = claim_text(h21_nodes, "Teaching philosophy");
			h21_nodes.forEach(detach_dev);
			t34 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t35 = claim_text(p5_nodes, "I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.\n    The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.");
			p5_nodes.forEach(detach_dev);
			t36 = claim_space(nodes);
			hr4 = claim_element(nodes, "HR", {});
			t37 = claim_space(nodes);
			h34 = claim_element(nodes, "H3", {});
			var h34_nodes = children(h34);
			t38 = claim_text(h34_nodes, "Regularly taught University courses");
			h34_nodes.forEach(detach_dev);
			t39 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			div0 = claim_element(li0_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			strong0 = claim_element(div0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t40 = claim_text(strong0_nodes, "Geographic Applications of Remote Sensing");
			strong0_nodes.forEach(detach_dev);
			t41 = claim_space(div0_nodes);
			span0 = claim_element(div0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t42 = claim_text(span0_nodes, "(Graduate)");
			span0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t43 = claim_space(li0_nodes);
			p6 = claim_element(li0_nodes, "P", {});
			var p6_nodes = children(p6);
			t44 = claim_text(p6_nodes, "The is an accelerated course.");
			p6_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t45 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			div1 = claim_element(li1_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			strong1 = claim_element(div1_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t46 = claim_text(strong1_nodes, "Exploring Spatial Databases");
			strong1_nodes.forEach(detach_dev);
			t47 = claim_space(div1_nodes);
			span1 = claim_element(div1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t48 = claim_text(span1_nodes, "(Graduate)");
			span1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t49 = claim_space(li1_nodes);
			p7 = claim_element(li1_nodes, "P", {});
			var p7_nodes = children(p7);
			t50 = claim_text(p7_nodes, "This course begins with ontologies and geospatial semantics, advances to \n            Entity-Relationship Diagrams, and concludes with basic to advanced SQL. \n            PostgreSQL with the PostGIS geospatial extention is used in the course.");
			p7_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t51 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			div2 = claim_element(li2_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			strong2 = claim_element(div2_nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t52 = claim_text(strong2_nodes, "Remote Sensing and Earth Observation");
			strong2_nodes.forEach(detach_dev);
			t53 = claim_space(div2_nodes);
			span2 = claim_element(div2_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t54 = claim_text(span2_nodes, "(Undergraduate)");
			span2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t55 = claim_space(li2_nodes);
			p8 = claim_element(li2_nodes, "P", {});
			var p8_nodes = children(p8);
			t56 = claim_text(p8_nodes, "This course is an introduction to the principles and practices of orbital and sub-orbital \n            Earth Observation.");
			p8_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t57 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			div3 = claim_element(li3_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			strong3 = claim_element(div3_nodes, "STRONG", {});
			var strong3_nodes = children(strong3);
			t58 = claim_text(strong3_nodes, "Advanced Geographic Information Systems");
			strong3_nodes.forEach(detach_dev);
			t59 = claim_space(div3_nodes);
			span3 = claim_element(div3_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t60 = claim_text(span3_nodes, "(Undergraduate)");
			span3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t61 = claim_space(li3_nodes);
			p9 = claim_element(li3_nodes, "P", {});
			var p9_nodes = children(p9);
			t62 = claim_text(p9_nodes, "This course covers advanced raster and vector analyses in a GIS environment.");
			p9_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "University";
			add_location(h20, file, 4, 0, 57);
			add_location(p0, file, 5, 0, 80);
			add_location(hr0, file, 9, 0, 202);
			attr_dev(h30, "class", "section-header svelte-c0z5gf");
			add_location(h30, file, 11, 0, 208);
			add_location(p1, file, 12, 0, 255);
			add_location(hr1, file, 15, 0, 296);
			attr_dev(h31, "class", "section-header svelte-c0z5gf");
			add_location(h31, file, 17, 0, 302);
			add_location(p2, file, 18, 0, 344);
			add_location(hr2, file, 21, 0, 399);
			attr_dev(h32, "class", "section-header svelte-c0z5gf");
			add_location(h32, file, 23, 0, 405);
			attr_dev(a0, "href", "https://www.docker.com");
			add_location(a0, file, 27, 25, 623);
			attr_dev(a1, "href", "https://www.djangoproject.com");
			add_location(a1, file, 28, 4, 677);
			attr_dev(a2, "href", "https://svelte.dev");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 29, 4, 753);
			add_location(p3, file, 24, 0, 449);
			add_location(hr3, file, 31, 0, 832);
			attr_dev(h33, "class", "section-header svelte-c0z5gf");
			add_location(h33, file, 33, 0, 838);
			attr_dev(a3, "href", "https://thecurritlab.github.io");
			add_location(a3, file, 35, 50, 939);
			add_location(p4, file, 34, 0, 885);
			add_location(h21, file, 38, 0, 1006);
			add_location(p5, file, 39, 0, 1035);
			add_location(hr4, file, 44, 0, 1260);
			add_location(h34, file, 46, 0, 1266);
			add_location(strong0, file, 50, 27, 1353);
			attr_dev(span0, "class", "level svelte-c0z5gf");
			add_location(span0, file, 50, 86, 1412);
			attr_dev(div0, "class", "title svelte-c0z5gf");
			add_location(div0, file, 50, 8, 1334);
			add_location(p6, file, 51, 8, 1464);
			add_location(li0, file, 49, 4, 1321);
			add_location(strong1, file, 54, 27, 1547);
			attr_dev(span1, "class", "level svelte-c0z5gf");
			add_location(span1, file, 54, 72, 1592);
			attr_dev(div1, "class", "title svelte-c0z5gf");
			add_location(div1, file, 54, 8, 1528);
			add_location(p7, file, 55, 8, 1644);
			add_location(li1, file, 53, 4, 1515);
			add_location(strong2, file, 62, 27, 1962);
			attr_dev(span2, "class", "level svelte-c0z5gf");
			add_location(span2, file, 62, 81, 2016);
			attr_dev(div2, "class", "title svelte-c0z5gf");
			add_location(div2, file, 62, 8, 1943);
			add_location(p8, file, 63, 8, 2073);
			add_location(li2, file, 61, 4, 1930);
			add_location(strong3, file, 69, 27, 2270);
			attr_dev(span3, "class", "level svelte-c0z5gf");
			add_location(span3, file, 69, 84, 2327);
			attr_dev(div3, "class", "title svelte-c0z5gf");
			add_location(div3, file, 69, 8, 2251);
			add_location(p9, file, 70, 8, 2384);
			add_location(li3, file, 68, 4, 2238);
			add_location(ul, file, 48, 0, 1312);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h20, anchor);
			append_dev(h20, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, h30, anchor);
			append_dev(h30, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t10, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, hr2, anchor);
			insert_dev(target, t15, anchor);
			insert_dev(target, h32, anchor);
			append_dev(h32, t16);
			insert_dev(target, t17, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t18);
			append_dev(p3, a0);
			append_dev(a0, t19);
			append_dev(p3, t20);
			append_dev(p3, a1);
			append_dev(a1, t21);
			append_dev(p3, t22);
			append_dev(p3, a2);
			append_dev(a2, t23);
			append_dev(p3, t24);
			insert_dev(target, t25, anchor);
			insert_dev(target, hr3, anchor);
			insert_dev(target, t26, anchor);
			insert_dev(target, h33, anchor);
			append_dev(h33, t27);
			insert_dev(target, t28, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t29);
			append_dev(p4, a3);
			append_dev(a3, t30);
			append_dev(p4, t31);
			insert_dev(target, t32, anchor);
			insert_dev(target, h21, anchor);
			append_dev(h21, t33);
			insert_dev(target, t34, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t35);
			insert_dev(target, t36, anchor);
			insert_dev(target, hr4, anchor);
			insert_dev(target, t37, anchor);
			insert_dev(target, h34, anchor);
			append_dev(h34, t38);
			insert_dev(target, t39, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, div0);
			append_dev(div0, strong0);
			append_dev(strong0, t40);
			append_dev(div0, t41);
			append_dev(div0, span0);
			append_dev(span0, t42);
			append_dev(li0, t43);
			append_dev(li0, p6);
			append_dev(p6, t44);
			append_dev(ul, t45);
			append_dev(ul, li1);
			append_dev(li1, div1);
			append_dev(div1, strong1);
			append_dev(strong1, t46);
			append_dev(div1, t47);
			append_dev(div1, span1);
			append_dev(span1, t48);
			append_dev(li1, t49);
			append_dev(li1, p7);
			append_dev(p7, t50);
			append_dev(ul, t51);
			append_dev(ul, li2);
			append_dev(li2, div2);
			append_dev(div2, strong2);
			append_dev(strong2, t52);
			append_dev(div2, t53);
			append_dev(div2, span2);
			append_dev(span2, t54);
			append_dev(li2, t55);
			append_dev(li2, p8);
			append_dev(p8, t56);
			append_dev(ul, t57);
			append_dev(ul, li3);
			append_dev(li3, div3);
			append_dev(div3, strong3);
			append_dev(strong3, t58);
			append_dev(div3, t59);
			append_dev(div3, span3);
			append_dev(span3, t60);
			append_dev(li3, t61);
			append_dev(li3, p9);
			append_dev(p9, t62);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h20);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(hr2);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(h32);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t25);
			if (detaching) detach_dev(hr3);
			if (detaching) detach_dev(t26);
			if (detaching) detach_dev(h33);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t32);
			if (detaching) detach_dev(h21);
			if (detaching) detach_dev(t34);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t36);
			if (detaching) detach_dev(hr4);
			if (detaching) detach_dev(t37);
			if (detaching) detach_dev(h34);
			if (detaching) detach_dev(t39);
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("University", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<University> was created with unknown prop '${key}'`);
	});

	return [];
}

class University extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "University",
			options,
			id: create_fragment.name
		});
	}
}

export default University;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdmVyc2l0eS45YWNiMzNhOS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

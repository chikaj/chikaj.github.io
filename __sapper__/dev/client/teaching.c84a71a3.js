import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.09f9688b.js';

/* src/routes/teaching.svelte generated by Svelte v3.31.2 */

const file = "src/routes/teaching.svelte";

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let hr;
	let t5;
	let h3;
	let t6;
	let t7;
	let ul;
	let li0;
	let div0;
	let strong0;
	let t8;
	let t9;
	let span0;
	let t10;
	let t11;
	let p1;
	let t12;
	let t13;
	let li1;
	let div1;
	let strong1;
	let t14;
	let t15;
	let span1;
	let t16;
	let t17;
	let p2;
	let t18;
	let t19;
	let li2;
	let div2;
	let strong2;
	let t20;
	let t21;
	let span2;
	let t22;
	let t23;
	let p3;
	let t24;
	let t25;
	let li3;
	let div3;
	let strong3;
	let t26;
	let t27;
	let span3;
	let t28;
	let t29;
	let p4;
	let t30;

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Teaching philosophy");
			t2 = space();
			p0 = element("p");
			t3 = text("I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.\n    The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.");
			t4 = space();
			hr = element("hr");
			t5 = space();
			h3 = element("h3");
			t6 = text("Regularly taught University courses");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			div0 = element("div");
			strong0 = element("strong");
			t8 = text("Geographic Applications of Remote Sensing");
			t9 = space();
			span0 = element("span");
			t10 = text("(Graduate)");
			t11 = space();
			p1 = element("p");
			t12 = text("The is an accelerated course.");
			t13 = space();
			li1 = element("li");
			div1 = element("div");
			strong1 = element("strong");
			t14 = text("Exploring Spatial Databases");
			t15 = space();
			span1 = element("span");
			t16 = text("(Graduate)");
			t17 = space();
			p2 = element("p");
			t18 = text("This course begins with ontologies and geospatial semantics, advances to \n            Entity-Relationship Diagrams, and concludes with basic to advanced SQL. \n            PostgreSQL with the PostGIS geospatial extention is used in the course.");
			t19 = space();
			li2 = element("li");
			div2 = element("div");
			strong2 = element("strong");
			t20 = text("Remote Sensing and Earth Observation");
			t21 = space();
			span2 = element("span");
			t22 = text("(Undergraduate)");
			t23 = space();
			p3 = element("p");
			t24 = text("This course is an introduction to the principles and practices of orbital and sub-orbital \n            Earth Observation.");
			t25 = space();
			li3 = element("li");
			div3 = element("div");
			strong3 = element("strong");
			t26 = text("Advanced Geographic Information Systems");
			t27 = space();
			span3 = element("span");
			t28 = text("(Undergraduate)");
			t29 = space();
			p4 = element("p");
			t30 = text("This course covers advanced raster and vector analyses in a GIS environment.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-gmt0qv\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Teaching philosophy");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.\n    The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			t5 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t6 = claim_text(h3_nodes, "Regularly taught University courses");
			h3_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			div0 = claim_element(li0_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			strong0 = claim_element(div0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t8 = claim_text(strong0_nodes, "Geographic Applications of Remote Sensing");
			strong0_nodes.forEach(detach_dev);
			t9 = claim_space(div0_nodes);
			span0 = claim_element(div0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t10 = claim_text(span0_nodes, "(Graduate)");
			span0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t11 = claim_space(li0_nodes);
			p1 = claim_element(li0_nodes, "P", {});
			var p1_nodes = children(p1);
			t12 = claim_text(p1_nodes, "The is an accelerated course.");
			p1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			div1 = claim_element(li1_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			strong1 = claim_element(div1_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t14 = claim_text(strong1_nodes, "Exploring Spatial Databases");
			strong1_nodes.forEach(detach_dev);
			t15 = claim_space(div1_nodes);
			span1 = claim_element(div1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t16 = claim_text(span1_nodes, "(Graduate)");
			span1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t17 = claim_space(li1_nodes);
			p2 = claim_element(li1_nodes, "P", {});
			var p2_nodes = children(p2);
			t18 = claim_text(p2_nodes, "This course begins with ontologies and geospatial semantics, advances to \n            Entity-Relationship Diagrams, and concludes with basic to advanced SQL. \n            PostgreSQL with the PostGIS geospatial extention is used in the course.");
			p2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t19 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			div2 = claim_element(li2_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			strong2 = claim_element(div2_nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t20 = claim_text(strong2_nodes, "Remote Sensing and Earth Observation");
			strong2_nodes.forEach(detach_dev);
			t21 = claim_space(div2_nodes);
			span2 = claim_element(div2_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t22 = claim_text(span2_nodes, "(Undergraduate)");
			span2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t23 = claim_space(li2_nodes);
			p3 = claim_element(li2_nodes, "P", {});
			var p3_nodes = children(p3);
			t24 = claim_text(p3_nodes, "This course is an introduction to the principles and practices of orbital and sub-orbital \n            Earth Observation.");
			p3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t25 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			div3 = claim_element(li3_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			strong3 = claim_element(div3_nodes, "STRONG", {});
			var strong3_nodes = children(strong3);
			t26 = claim_text(strong3_nodes, "Advanced Geographic Information Systems");
			strong3_nodes.forEach(detach_dev);
			t27 = claim_space(div3_nodes);
			span3 = claim_element(div3_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t28 = claim_text(span3_nodes, "(Undergraduate)");
			span3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t29 = claim_space(li3_nodes);
			p4 = claim_element(li3_nodes, "P", {});
			var p4_nodes = children(p4);
			t30 = claim_text(p4_nodes, "This course covers advanced raster and vector analyses in a GIS environment.");
			p4_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Teaching";
			add_location(h2, file, 8, 0, 96);
			add_location(p0, file, 9, 0, 125);
			add_location(hr, file, 14, 0, 350);
			add_location(h3, file, 16, 0, 356);
			add_location(strong0, file, 20, 27, 443);
			attr_dev(span0, "class", "level svelte-160nxvo");
			add_location(span0, file, 20, 86, 502);
			attr_dev(div0, "class", "title svelte-160nxvo");
			add_location(div0, file, 20, 8, 424);
			add_location(p1, file, 21, 8, 554);
			add_location(li0, file, 19, 4, 411);
			add_location(strong1, file, 24, 27, 637);
			attr_dev(span1, "class", "level svelte-160nxvo");
			add_location(span1, file, 24, 72, 682);
			attr_dev(div1, "class", "title svelte-160nxvo");
			add_location(div1, file, 24, 8, 618);
			add_location(p2, file, 25, 8, 734);
			add_location(li1, file, 23, 4, 605);
			add_location(strong2, file, 32, 27, 1052);
			attr_dev(span2, "class", "level svelte-160nxvo");
			add_location(span2, file, 32, 81, 1106);
			attr_dev(div2, "class", "title svelte-160nxvo");
			add_location(div2, file, 32, 8, 1033);
			add_location(p3, file, 33, 8, 1163);
			add_location(li2, file, 31, 4, 1020);
			add_location(strong3, file, 39, 27, 1360);
			attr_dev(span3, "class", "level svelte-160nxvo");
			add_location(span3, file, 39, 84, 1417);
			attr_dev(div3, "class", "title svelte-160nxvo");
			add_location(div3, file, 39, 8, 1341);
			add_location(p4, file, 40, 8, 1474);
			add_location(li3, file, 38, 4, 1328);
			add_location(ul, file, 18, 0, 402);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, hr, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, div0);
			append_dev(div0, strong0);
			append_dev(strong0, t8);
			append_dev(div0, t9);
			append_dev(div0, span0);
			append_dev(span0, t10);
			append_dev(li0, t11);
			append_dev(li0, p1);
			append_dev(p1, t12);
			append_dev(ul, t13);
			append_dev(ul, li1);
			append_dev(li1, div1);
			append_dev(div1, strong1);
			append_dev(strong1, t14);
			append_dev(div1, t15);
			append_dev(div1, span1);
			append_dev(span1, t16);
			append_dev(li1, t17);
			append_dev(li1, p2);
			append_dev(p2, t18);
			append_dev(ul, t19);
			append_dev(ul, li2);
			append_dev(li2, div2);
			append_dev(div2, strong2);
			append_dev(strong2, t20);
			append_dev(div2, t21);
			append_dev(div2, span2);
			append_dev(span2, t22);
			append_dev(li2, t23);
			append_dev(li2, p3);
			append_dev(p3, t24);
			append_dev(ul, t25);
			append_dev(ul, li3);
			append_dev(li3, div3);
			append_dev(div3, strong3);
			append_dev(strong3, t26);
			append_dev(div3, t27);
			append_dev(div3, span3);
			append_dev(span3, t28);
			append_dev(li3, t29);
			append_dev(li3, p4);
			append_dev(p4, t30);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t7);
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
	validate_slots("Teaching", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Teaching> was created with unknown prop '${key}'`);
	});

	return [];
}

class Teaching extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Teaching",
			options,
			id: create_fragment.name
		});
	}
}

export default Teaching;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmcuYzg0YTcxYTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

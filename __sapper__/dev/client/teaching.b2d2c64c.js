import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, m as attr_dev, k as insert_dev, l as append_dev, n as noop } from './client.6e88fae5.js';

/* src/routes/teaching.svelte generated by Svelte v3.31.2 */

const file = "src/routes/teaching.svelte";

function create_fragment(ctx) {
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let h3;
	let t4;
	let t5;
	let ul;
	let li0;
	let strong0;
	let t6;
	let t7;
	let span0;
	let t8;
	let t9;
	let p1;
	let t10;
	let t11;
	let li1;
	let strong1;
	let t12;
	let t13;
	let span1;
	let t14;
	let t15;
	let p2;
	let t16;
	let t17;
	let li2;
	let strong2;
	let t18;
	let t19;
	let span2;
	let t20;
	let t21;
	let p3;
	let t22;
	let t23;
	let li3;
	let strong3;
	let t24;
	let t25;
	let span3;
	let t26;
	let t27;
	let p4;
	let t28;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Teaching philosophy");
			t1 = space();
			p0 = element("p");
			t2 = text("I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.\n    The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.");
			t3 = space();
			h3 = element("h3");
			t4 = text("Regularly taught University courses");
			t5 = space();
			ul = element("ul");
			li0 = element("li");
			strong0 = element("strong");
			t6 = text("Geographic Applications of Remote Sensing");
			t7 = space();
			span0 = element("span");
			t8 = text("(Graduate)");
			t9 = space();
			p1 = element("p");
			t10 = text("The is an accelerated course.");
			t11 = space();
			li1 = element("li");
			strong1 = element("strong");
			t12 = text("Remote Sensing and Earth Observation");
			t13 = space();
			span1 = element("span");
			t14 = text("(Undergraduate)");
			t15 = space();
			p2 = element("p");
			t16 = text("This course is an introduction to the principles and practices of orbital and sub-orbital \n            Earth Observation.");
			t17 = space();
			li2 = element("li");
			strong2 = element("strong");
			t18 = text("Advanced Geographic Information Systems");
			t19 = space();
			span2 = element("span");
			t20 = text("(Undergraduate)");
			t21 = space();
			p3 = element("p");
			t22 = text("This course covers advanced raster and vector analyses in a GIS environment.");
			t23 = space();
			li3 = element("li");
			strong3 = element("strong");
			t24 = text("Exploring Spatial Databases");
			t25 = space();
			span3 = element("span");
			t26 = text("(Graduate)");
			t27 = space();
			p4 = element("p");
			t28 = text("This course begins with ontologies and geospatial semantics, advances to \n            Entity-Relationship Diagrams, and concludes with basic to advanced SQL. \n            PostgreSQL with the PostGIS geospatial extention is used in the course.");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Teaching philosophy");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.\n    The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, "Regularly taught University courses");
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			strong0 = claim_element(li0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t6 = claim_text(strong0_nodes, "Geographic Applications of Remote Sensing");
			strong0_nodes.forEach(detach_dev);
			t7 = claim_space(li0_nodes);
			span0 = claim_element(li0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t8 = claim_text(span0_nodes, "(Graduate)");
			span0_nodes.forEach(detach_dev);
			t9 = claim_space(li0_nodes);
			p1 = claim_element(li0_nodes, "P", {});
			var p1_nodes = children(p1);
			t10 = claim_text(p1_nodes, "The is an accelerated course.");
			p1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			strong1 = claim_element(li1_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t12 = claim_text(strong1_nodes, "Remote Sensing and Earth Observation");
			strong1_nodes.forEach(detach_dev);
			t13 = claim_space(li1_nodes);
			span1 = claim_element(li1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t14 = claim_text(span1_nodes, "(Undergraduate)");
			span1_nodes.forEach(detach_dev);
			t15 = claim_space(li1_nodes);
			p2 = claim_element(li1_nodes, "P", {});
			var p2_nodes = children(p2);
			t16 = claim_text(p2_nodes, "This course is an introduction to the principles and practices of orbital and sub-orbital \n            Earth Observation.");
			p2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t17 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			strong2 = claim_element(li2_nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t18 = claim_text(strong2_nodes, "Advanced Geographic Information Systems");
			strong2_nodes.forEach(detach_dev);
			t19 = claim_space(li2_nodes);
			span2 = claim_element(li2_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t20 = claim_text(span2_nodes, "(Undergraduate)");
			span2_nodes.forEach(detach_dev);
			t21 = claim_space(li2_nodes);
			p3 = claim_element(li2_nodes, "P", {});
			var p3_nodes = children(p3);
			t22 = claim_text(p3_nodes, "This course covers advanced raster and vector analyses in a GIS environment.");
			p3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t23 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			strong3 = claim_element(li3_nodes, "STRONG", {});
			var strong3_nodes = children(strong3);
			t24 = claim_text(strong3_nodes, "Exploring Spatial Databases");
			strong3_nodes.forEach(detach_dev);
			t25 = claim_space(li3_nodes);
			span3 = claim_element(li3_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t26 = claim_text(span3_nodes, "(Graduate)");
			span3_nodes.forEach(detach_dev);
			t27 = claim_space(li3_nodes);
			p4 = claim_element(li3_nodes, "P", {});
			var p4_nodes = children(p4);
			t28 = claim_text(p4_nodes, "This course begins with ontologies and geospatial semantics, advances to \n            Entity-Relationship Diagrams, and concludes with basic to advanced SQL. \n            PostgreSQL with the PostGIS geospatial extention is used in the course.");
			p4_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 0, 0, 0);
			add_location(p0, file, 1, 0, 29);
			add_location(h3, file, 6, 0, 254);
			add_location(strong0, file, 9, 8, 321);
			attr_dev(span0, "class", "level svelte-m1f86x");
			add_location(span0, file, 9, 67, 380);
			add_location(p1, file, 10, 8, 426);
			add_location(li0, file, 8, 4, 308);
			add_location(strong1, file, 13, 8, 490);
			attr_dev(span1, "class", "level svelte-m1f86x");
			add_location(span1, file, 13, 62, 544);
			add_location(p2, file, 14, 8, 595);
			add_location(li1, file, 12, 4, 477);
			add_location(strong2, file, 20, 8, 773);
			attr_dev(span2, "class", "level svelte-m1f86x");
			add_location(span2, file, 20, 65, 830);
			add_location(p3, file, 21, 8, 881);
			add_location(li2, file, 19, 4, 760);
			add_location(strong3, file, 24, 8, 992);
			attr_dev(span3, "class", "level svelte-m1f86x");
			add_location(span3, file, 24, 53, 1037);
			add_location(p4, file, 25, 8, 1083);
			add_location(li3, file, 23, 4, 979);
			add_location(ul, file, 7, 0, 299);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, strong0);
			append_dev(strong0, t6);
			append_dev(li0, t7);
			append_dev(li0, span0);
			append_dev(span0, t8);
			append_dev(li0, t9);
			append_dev(li0, p1);
			append_dev(p1, t10);
			append_dev(ul, t11);
			append_dev(ul, li1);
			append_dev(li1, strong1);
			append_dev(strong1, t12);
			append_dev(li1, t13);
			append_dev(li1, span1);
			append_dev(span1, t14);
			append_dev(li1, t15);
			append_dev(li1, p2);
			append_dev(p2, t16);
			append_dev(ul, t17);
			append_dev(ul, li2);
			append_dev(li2, strong2);
			append_dev(strong2, t18);
			append_dev(li2, t19);
			append_dev(li2, span2);
			append_dev(span2, t20);
			append_dev(li2, t21);
			append_dev(li2, p3);
			append_dev(p3, t22);
			append_dev(ul, t23);
			append_dev(ul, li3);
			append_dev(li3, strong3);
			append_dev(strong3, t24);
			append_dev(li3, t25);
			append_dev(li3, span3);
			append_dev(span3, t26);
			append_dev(li3, t27);
			append_dev(li3, p4);
			append_dev(p4, t28);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmcuYjJkMmM2NGMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

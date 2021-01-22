import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.d17f2b3d.js';

/* src/routes/research.svelte generated by Svelte v3.31.2 */

const file = "src/routes/research.svelte";

function create_fragment(ctx) {
	let t0;
	let h2;
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

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
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
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-trdxp1\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Research foci");
			h2_nodes.forEach(detach_dev);
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
			this.h();
		},
		h: function hydrate() {
			document.title = "Research";
			add_location(h2, file, 8, 0, 96);
			add_location(p0, file, 9, 0, 119);
			add_location(hr0, file, 13, 0, 241);
			attr_dev(h30, "class", "section-header svelte-15io68f");
			add_location(h30, file, 15, 0, 247);
			add_location(p1, file, 16, 0, 294);
			add_location(hr1, file, 19, 0, 335);
			attr_dev(h31, "class", "section-header svelte-15io68f");
			add_location(h31, file, 21, 0, 341);
			add_location(p2, file, 22, 0, 383);
			add_location(hr2, file, 25, 0, 438);
			attr_dev(h32, "class", "section-header svelte-15io68f");
			add_location(h32, file, 27, 0, 444);
			attr_dev(a0, "href", "https://www.docker.com");
			add_location(a0, file, 31, 25, 662);
			attr_dev(a1, "href", "https://www.djangoproject.com");
			add_location(a1, file, 32, 4, 716);
			attr_dev(a2, "href", "https://svelte.dev");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 33, 4, 792);
			add_location(p3, file, 28, 0, 488);
			add_location(hr3, file, 35, 0, 871);
			attr_dev(h33, "class", "section-header svelte-15io68f");
			add_location(h33, file, 37, 0, 877);
			attr_dev(a3, "href", "https://thecurritlab.github.io");
			add_location(a3, file, 39, 50, 978);
			add_location(p4, file, 38, 0, 924);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
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
	validate_slots("Research", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Research> was created with unknown prop '${key}'`);
	});

	return [];
}

class Research extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Research",
			options,
			id: create_fragment.name
		});
	}
}

export default Research;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZWFyY2guOGJkNTEzYjYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, m as attr_dev, k as insert_dev, l as append_dev, n as noop } from './client.fdd5427b.js';

/* src/routes/research.svelte generated by Svelte v3.31.2 */

const file = "src/routes/research.svelte";

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
	let p1;
	let t6;
	let a;
	let t7;
	let t8;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Research foci");
			t1 = space();
			p0 = element("p");
			t2 = text("I focus on GISience projects that integrate human-environment interaction.\n    I do a few other things, too.");
			t3 = space();
			h3 = element("h3");
			t4 = text("The Currit Lab");
			t5 = space();
			p1 = element("p");
			t6 = text("I coordinate much of my work with students in ");
			a = element("a");
			t7 = text("The Currit Lab");
			t8 = text(".");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Research foci");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "I focus on GISience projects that integrate human-environment interaction.\n    I do a few other things, too.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, "The Currit Lab");
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "I coordinate much of my work with students in ");
			a = claim_element(p1_nodes, "A", { href: true });
			var a_nodes = children(a);
			t7 = claim_text(a_nodes, "The Currit Lab");
			a_nodes.forEach(detach_dev);
			t8 = claim_text(p1_nodes, ".");
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 4, 0, 21);
			add_location(p0, file, 5, 0, 44);
			attr_dev(h3, "class", "section-header svelte-15io68f");
			add_location(h3, file, 10, 0, 167);
			attr_dev(a, "href", "https://thecurritlab.github.io");
			add_location(a, file, 12, 50, 268);
			add_location(p1, file, 11, 0, 214);
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
			insert_dev(target, p1, anchor);
			append_dev(p1, t6);
			append_dev(p1, a);
			append_dev(a, t7);
			append_dev(p1, t8);
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
			if (detaching) detach_dev(p1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZWFyY2guOTE0ZGVlYmYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

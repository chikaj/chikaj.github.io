import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, m as attr_dev, k as insert_dev, l as append_dev, n as noop } from './client.1d290123.js';

/* src/routes/teaching.svelte generated by Svelte v3.31.2 */

const file = "src/routes/teaching.svelte";

function create_fragment(ctx) {
	let h2;
	let t0;
	let t1;
	let ul;
	let li0;
	let strong0;
	let t2;
	let t3;
	let span0;
	let t4;
	let t5;
	let p;
	let t6;
	let t7;
	let li1;
	let strong1;
	let t8;
	let t9;
	let span1;
	let t10;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Regularly taught University courses");
			t1 = space();
			ul = element("ul");
			li0 = element("li");
			strong0 = element("strong");
			t2 = text("Geographic Applications of Remote Sensing");
			t3 = space();
			span0 = element("span");
			t4 = text("(Graduate)");
			t5 = space();
			p = element("p");
			t6 = text("The is an accelerated course.");
			t7 = space();
			li1 = element("li");
			strong1 = element("strong");
			t8 = text("Remote Sensing and Earth Observation");
			t9 = space();
			span1 = element("span");
			t10 = text("(Undergraduate)");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Regularly taught University courses");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			strong0 = claim_element(li0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t2 = claim_text(strong0_nodes, "Geographic Applications of Remote Sensing");
			strong0_nodes.forEach(detach_dev);
			t3 = claim_space(li0_nodes);
			span0 = claim_element(li0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t4 = claim_text(span0_nodes, "(Graduate)");
			span0_nodes.forEach(detach_dev);
			t5 = claim_space(li0_nodes);
			p = claim_element(li0_nodes, "P", {});
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "The is an accelerated course.");
			p_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			strong1 = claim_element(li1_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t8 = claim_text(strong1_nodes, "Remote Sensing and Earth Observation");
			strong1_nodes.forEach(detach_dev);
			t9 = claim_space(li1_nodes);
			span1 = claim_element(li1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t10 = claim_text(span1_nodes, "(Undergraduate)");
			span1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 0, 0, 0);
			add_location(strong0, file, 3, 8, 67);
			attr_dev(span0, "class", "level svelte-m1f86x");
			add_location(span0, file, 3, 67, 126);
			add_location(p, file, 4, 8, 172);
			add_location(li0, file, 2, 4, 54);
			add_location(strong1, file, 6, 8, 227);
			attr_dev(span1, "class", "level svelte-m1f86x");
			add_location(span1, file, 6, 62, 281);
			add_location(li1, file, 6, 4, 223);
			add_location(ul, file, 1, 0, 45);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, strong0);
			append_dev(strong0, t2);
			append_dev(li0, t3);
			append_dev(li0, span0);
			append_dev(span0, t4);
			append_dev(li0, t5);
			append_dev(li0, p);
			append_dev(p, t6);
			append_dev(ul, t7);
			append_dev(ul, li1);
			append_dev(li1, strong1);
			append_dev(strong1, t8);
			append_dev(li1, t9);
			append_dev(li1, span1);
			append_dev(span1, t10);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmcuZTc3NDhjYjAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

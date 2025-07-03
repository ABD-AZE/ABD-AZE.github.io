import React from "react";
import BlogPost from "./BlogPost";

const GroupTheoryPost: React.FC = () => {
  const content = (
    <>
      <p>
        To understand zero-knowledge proofs, a solid grasp of abstract algebra
        is essential. This blog will provide a concise yet comprehensive
        overview of the key concepts in abstract algebra, equipping you with the
        foundational knowledge needed to begin exploring zero-knowledge proofs.
        By covering the basics in a clear and accessible manner, this guide will
        help you build the necessary skills to delve deeper into the fascinating
        world of cryptographic proofs.
      </p>

      <p>
        Before diving into the deep realms of abstract algebra it is necessary
        that we revisit some definitions from set theory. Set theory is
        essential for understanding zero-knowledge proofs because it forms the
        foundation of abstract algebra. Abstract algebra relies heavily on set
        theory to define and manipulate the structures used in cryptographic
        proofs. This foundational knowledge ensures a clear understanding of the
        terminology and concepts necessary for practical applications in
        zero-knowledge proofs.
      </p>

      <p>
        Below are the one line definitions of terms used frequently in set
        theory:
      </p>

      <p>
        In abstract algebra, a <strong>set</strong> is a collection of different
        things; these things are called elements or members of the set and are
        typically mathematical objects of any kind: numbers, symbols, points in
        space, lines, other geometrical shapes, variables, or even other sets.
      </p>

      <p>
        A <strong>subset</strong> is a set(S1) in which all its elements are
        also elements of another set(S).
      </p>

      <p>
        A <strong>superset</strong>(S2) is a set that contains all the elements
        of another set(S).
      </p>

      <p>
        <strong>Cardinality</strong> is the number of elements in a set.
      </p>

      <p>
        <strong>Ordered Pair:</strong> An ordered pair is a data structure
        derived from sets that respects order, unlike regular sets which do not.
        For example, (a, b) is an ordered pair while {"{a, b}"} is a set. In
        programming, this is akin to a tuple, where the order matters: (a, b) is
        not the same as (b, a). This ordering is implemented by defining (a, b)
        in set form as {"{a, {b}}"}, ensuring the distinction.
      </p>

      <p>
        <strong>Cartesian Product:</strong> The Cartesian product of two sets, A
        and B, is a set of ordered pairs where each element from A is paired
        with each element from B. For example, if A = {"{1, 2, 3}"} and B ={" "}
        {"{x, y, z}"}, then A × B ={" "}
        {"{(1, x), (1, y), (1, z), (2, x), ..., (3, z)}"}.
      </p>

      <p>
        <strong>Relation:</strong> A relation is a subset of the Cartesian
        product of two sets. For example, if A and B are sets, a relation R from
        A to B is a set of ordered pairs (a, b) where a ∈ A and b ∈ B.
      </p>

      <p>
        <strong>Function:</strong> A function is a special type of relation
        where each element in set A is associated with exactly one element in
        set B. This means for a function f from A to B, if (a, b) and (a, c) are
        in the relation, then b must equal c.
      </p>

      <h2>Binary Operator</h2>
      <p>
        A binary operator is a mathematical function that combines two elements
        from a set and produces another element from the same set. Formally,
        it's denoted as "⊗" and defined as a mapping from the Cartesian product
        of a set with itself (A × A) to the set itself, i.e., ⊗: A × A → A.
      </p>

      <p>
        Let's explore this concept with a set of geometric shapes:{" "}
        {"{Circle, Square, Triangle}"}. We'll define a binary operator called
        "Shape Fusion" represented by ⊗, which combines two shapes and outputs a
        new shape.
      </p>

      <p>
        For instance, when we fuse a Circle with a Square, we might define the
        result as an Ellipse. Similarly, fusing a Square with a Triangle could
        yield a Rhombus, and fusing a Triangle with a Circle might result in a
        Heart shape.
      </p>

      <p>
        The key properties of binary operators include closure, which ensures
        that the result of the operation remains within the same set. In our
        example, the Shape Fusion operation always produces a shape from our
        initial set {"{Circle, Square, Triangle}"}. Additionally, the order of
        fusion matters; fusing a Circle with a Square may yield a different
        shape from fusing a Square with a Circle, indicating non-commutativity.
      </p>

      <p>
        Understanding binary operators in this context enables us to predict the
        outcomes of combining different shapes without concerning ourselves with
        the intricate details of shape transformation. We can focus on the
        properties of the fusion operation, such as closure and commutativity,
        to analyze the resulting shapes of various combinations.
      </p>

      <p>
        Let's break down the properties of binary operators over sets and
        explore each concept more thoroughly:
      </p>

      <h3>Magma</h3>
      <p>
        A magma, also known as a binar or groupoid, serves as the most
        fundamental type of algebraic structure. In essence, a magma consists of
        a set paired with a single binary operation, where the operation must
        adhere to one essential requirement: closure. Closure dictates that when
        this operation is applied to any two elements within the set, the result
        remains within the set. No additional properties are mandated beyond
        closure.
      </p>

      <h3>Semigroup</h3>
      <p>
        Moving up the hierarchy, a semigroup emerges as an extension of a magma.
        Here, the binary operation must possess an extra property beyond
        closure: associativity. Associativity dictates that when applying the
        operation to three elements, the grouping of operations does not
        influence the outcome. In simpler terms, the way we group elements in a
        series of operations doesn't matter as long as the order of operations
        remains consistent.
      </p>

      <h3>Monoid</h3>
      <p>
        Next, we encounter the monoid, which builds upon the concept of a
        semigroup. In addition to closure and associativity, a monoid
        incorporates another critical element: an identity element. An identity
        element acts as a neutral element within the set, such that when
        combined with any other element using the binary operation, it leaves
        the element unchanged. Think of it as the mathematical equivalent of the
        number 0 in addition or the number 1 in multiplication.
      </p>

      <h3>Group</h3>
      <p>
        Finally, we arrive at the group, often considered the star of the show
        in algebraic structures. A group encapsulates all the properties of a
        monoid while introducing a crucial element: inverses. In a group, every
        element possesses an inverse—an element within the set that, when
        combined with the original element using the binary operation, yields
        the identity element. This property ensures that for every operation,
        there exists a way to "undo" it, making groups incredibly versatile and
        powerful mathematical tools.
      </p>

      <p>
        <strong>Abelian Group:</strong> An abelian group is a group in which the
        binary operation is commutative, meaning for any two elements a and b in
        the group, a * b = b * a. This property is in addition to the standard
        group properties of closure, associativity, the existence of an identity
        element, and the existence of inverse elements.
      </p>

      <p>Refer the following table for simple understanding of a group:</p>

      <ul>
        <li>
          <strong>(G1) – Closure law:</strong> for a, b ∈ G, a ⋆ b ∈ G
        </li>
        <li>
          <strong>(G2) – Associative law:</strong> a ⋆ (b ⋆ c) = (a ⋆ b) ⋆ c for
          all a, b, c ∈ G
        </li>
        <li>
          <strong>(G3) – Identity element:</strong> there is an element e ∈ G
          such that a ⋆ e = e ⋆ a = a for all a ∈ G; where e is the identity
          element
        </li>
        <li>
          <strong>(G4) – Inverse law:</strong> for each a ∈ G, there exists an
          element b ∈ G such that a ⋆ b = b ⋆ a = e, where b = a⁻¹ is the
          inverse element of a.
        </li>
      </ul>

      <h2>Examples of Groups</h2>
      <p>
        Go through the following examples for better understanding of a group:
      </p>

      <h3>
        Example 1: The set of 2D points on an euclidean plane under addition is
        a group
      </h3>
      <p>
        Consider our set to be the set of all real-valued (x, y) points on a
        typical plot.
      </p>
      <ol>
        <li>
          Our binary operator is adding points together, for example (1,1) +
          (2,2) = (3,3).
        </li>
        <li>
          Our identity element is the origin, because adding with that will
          result in the same location of the other point.
        </li>
        <li>
          The inverse is simply the "mirror image" over the origin (the x and y
          flipped) because when you add them together, they result in the
          origin.
        </li>
      </ol>

      <h3>Example 2: Addition modulo a prime number is a group</h3>
      <p>Satisfies the 4 criterias of group:</p>
      <ol>
        <li>
          Closure and associative property are directly consequence of addition.
        </li>
        <li>We clearly have Identity as 0.</li>
        <li>
          Inverse would be an other element such that their sum is a multiple of
          the prime number.
        </li>
      </ol>
      <p>
        Let's take a prime number 7. Here, the identity is still 0, because you
        add by 0 and get the same number back. In this situation, what would the
        inverse of 5 be? It would just be 2, because 7 - 5 = 2, or 5 + 2 mod 7
        is zero (the identity).
      </p>

      <h2>Some examples of sets which are not group are listed below:</h2>

      <h3>Example 1: Multiplication modulo a prime number is not a group</h3>
      <p>
        The problem is we can't define an identity and inverse that works for
        everything. If we define our identity to be 1, then it isn't possible to
        invert zero, because zero cannot be multiplied with anything to obtain
        1. If we set our identity to be zero, then it won't behave like an
        identity because any number multiplied by zero is not itself, but zero.
      </p>

      <h3>Example 2: The set of vectors in R² with the cross product</h3>
      <p>
        The cross product is not defined for vectors in R²; it is only defined
        for vectors in R³. The cross product operation results in a vector
        orthogonal to the original two vectors, which inherently requires three
        dimensions. Thus, trying to define the cross product for vectors in R²
        is invalid, and therefore, R² with the cross product cannot form a
        group.
      </p>

      <h2>Some generally used definitions related to groups are as follows:</h2>

      <h3>Finite groups</h3>
      <p>
        As the name suggests, a finite group has a finite number of elements in
        it. The set of all integers under addition is not finite, but addition
        of integers modulo a prime number is a finite group.
      </p>

      <h3>Order of a group</h3>
      <p>
        The order of a group is its cardinality i.e., the number of its
        elements.
      </p>

      <h3>Cyclic groups</h3>
      <p>
        A cyclic group G is a group that can be generated by a single element a,
        so that every element in G has the form aⁱ for some integer i. We denote
        the cyclic group of order n by ℤₙ, since the additive group of ℤₙ is a
        cyclic group of order n.
      </p>
      <p>
        <strong>Note 1:</strong> A cyclic group is Abelian but the converse is
        not true.
      </p>
      <p>
        <strong>Note 2:</strong> Identity of a Group is Unique.
      </p>

      <h2>Group Homomorphism</h2>
      <p>
        A group homomorphism is a function between two groups that preserves the
        group operation. This means that if you take two elements from the first
        group, combine them using the group's operation, and then apply the
        homomorphism, you will get the same result as if you first applied the
        homomorphism to each element and then combined the results using the
        second group's operation.
      </p>
      <p>
        Mathematically, let G be a group with a binary operation * and H be a
        group with a binary operation ○. A function phi: G → H is a group
        homomorphism if for all elements g, g' in G, the following holds:
      </p>
      <p>phi(g * g') = phi(g) ○ phi(g')</p>
      <p>Let us see some examples for better understanding the definition:</p>

      <h3>Example 1: Integers and Real Numbers</h3>
      <p>
        Consider the group of integers ℤ under addition and the group of
        non-zero real numbers ℝ* under multiplication. Define the map phi: ℤ →
        ℝ* by phi(n) = 2ⁿ.
      </p>
      <ul>
        <li>Closure: For any m, n in ℤ, phi(m + n) = 2^(m+n).</li>
        <li>
          Preservation of operation: phi(m + n) = 2^(m+n) = 2ᵐ * 2ⁿ = phi(m) *
          phi(n).
        </li>
      </ul>
      <p>
        This function phi is a homomorphism because it maps the sum of integers
        to the product of their corresponding powers of 2.
      </p>

      <h3>Example 2: Complex Numbers and Real Numbers</h3>
      <p>
        Consider the group of non-zero complex numbers under multiplication ℂ*
        and the group of real numbers under addition ℝ. Define the map phi: ℂ* →
        ℝ by phi(z) = ln|z|.
      </p>
      <ul>
        <li>Closure: For any z, w in ℂ*, phi(z * w) = ln|z * w|.</li>
        <li>
          Preservation of operation: phi(z * w) = ln|z * w| = ln|z| + ln|w| =
          phi(z) + phi(w).
        </li>
      </ul>
      <p>
        This function phi is a homomorphism because it maps the product of
        complex numbers to the sum of their logarithms.
      </p>
      <p>
        A beautiful use of group homomorphism to prove euler's identity has been
        shown in the given video:{" "}
        <a
          href="https://youtu.be/mvmuCPvRoWQ?si=q5EIYT5v9y2GX4_1"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://youtu.be/mvmuCPvRoWQ?si=q5EIYT5v9y2GX4_1
        </a>
      </p>

      <p>
        In summary, a group homomorphism phi is a structure-preserving map
        between two groups, ensuring that the operation in the first group
        corresponds to the operation in the second group under the map phi.
      </p>

      <p>
        <strong>Congratulations</strong>, you are now well equipped with the
        tools necessary for understanding zero knowledge proofs. But before
        moving ahead it is necessary that you practice the given questions to
        test your understanding:
      </p>

      <h2>Practice Questions</h2>
      <ol>
        <li>
          <strong>Q1:</strong> Prove or Disprove that A × B = B × A. Where X
          represents the cartesian product.
        </li>
        <li>
          <strong>Q2:</strong> Find the number of subsets of the set{" "}
          {"{1,2,5,6,10,101,4040,2210,3490,100000007}"} such that they contain
          only prime numbers.
        </li>
        <li>
          <strong>Q3:</strong> Given the set of mathematical functions{" "}
          {"{linear, quadratic, exponential, logarithmic}"} and a set of
          real-world phenomena{" "}
          {
            "{population growth, radioactive decay, distance travelled with constant speed, heat dissipation}"
          }
          , create a mapping where each function is associated with the
          phenomenon it models.
        </li>
        <li>
          <strong>Q4:</strong> Prove that a cyclic group is abelian.
        </li>
        <li>
          <strong>Q5:</strong> Investigate whether polynomials under addition
          form a group? What about polynomials under multiplication?
        </li>
        <li>
          <strong>Q6:</strong> Consider the subset S of vectors in the
          two-dimensional plane defined by ax + by = 0, where a and b are
          integers and the vectors have integral magnitude, excluding the zero
          vector. Determine whether S, under vector addition, forms a cyclic
          group. If so, prove it; if not, explain why.
        </li>
      </ol>
    </>
  );

  return (
    <BlogPost
      title="Group Theory Unmasked: Building Zero-Knowledge from Symmetry"
      subtitle="An intuitive guide to the algebra that makes proving without revealing possible."
      author="ABDULLAH AZEEM"
      date="APR 21, 2025"
      content={content}
    />
  );
};

export default GroupTheoryPost;

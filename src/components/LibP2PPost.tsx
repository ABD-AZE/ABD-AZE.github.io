import React from "react";
import BlogPost from "./BlogPost";

const LibP2PPost: React.FC = () => {
  const content = (
    <>
      <h2>Introduction</h2>
      <p>
        Braidpool is a decentralized Bitcoin mining pool that introduces a
        DAG-based bead structure to represent mining contributions. Unlike
        centralized pools, Braidpool relies on a peer-to-peer (P2P) network to
        propagate mining work and share updates. For this vision to work, robust
        peer discovery and transport mechanisms are critical.
      </p>

      <p>
        My work in Braidpool focuses on building the foundation for Braidpool's
        P2P layer using the{" "}
        <a href="https://libp2p.io/" target="_blank" rel="noopener noreferrer">
          libp2p
        </a>{" "}
        framework. In this blog, I'll walk through the transport choices,
        bootstrap logic, NAT traversal, and DHT support that enable a resilient
        peer discovery system.
      </p>

      <h2>Transport Layer: QUIC</h2>
      <p>
        Libp2p supports multiple transport protocols, and for Braidpool we chose
        QUIC as the default transport layer. Built on top of UDP, QUIC offers:
      </p>

      <ul>
        <li>
          <strong>0-RTT handshakes</strong>: Significantly lower connection
          setup times.
        </li>
        <li>
          <strong>Multiplexed Streams</strong>: Efficient multiple logical
          streams over a single connection.
        </li>
        <li>
          <strong>Native encryption</strong>: All QUIC traffic is encrypted
          using TLS 1.3.
        </li>
      </ul>

      <p>Example multiaddress used by Braidpool nodes:</p>

      <pre>
        <code>--multiaddr /ip4/0.0.0.0/udp/48555/quic-v1</code>
      </pre>

      <p>To connect to a peer:</p>

      <pre>
        <code>
          --addnode /ip4/192.168.1.20/udp/48555/quic-v1/p2p/&lt;peer-id&gt;
        </code>
      </pre>

      <h2>Bootstrap Process</h2>
      <p>
        To join the Braidpool network, a node must connect to at least one known
        peer. This is handled using a CLI argument:
      </p>

      <ul>
        <li>
          The <code>--addnode</code> flag specifies the seed peer.
        </li>
        <li>libp2p dials this peer using QUIC.</li>
        <li>
          Once connected, identity exchange and ping behaviour are initiated.
        </li>
      </ul>

      <h2>NAT Traversal and Hole Punching</h2>
      <p>
        Many users run Braidpool nodes behind NATs or firewalls, which block
        unsolicited incoming connections. Libp2p provides hole punching to
        address this.
      </p>

      <p>When two peers behind NATs want to connect:</p>

      <ul>
        <li>
          They use a mutual relay or observed addresses to learn their
          public-facing endpoints.
        </li>
        <li>
          Libp2p's hole punching protocol coordinates NAT traversal to allow the
          two nodes to connect directly.
        </li>
      </ul>

      <p>
        This allows for truly decentralized connectivity without needing static
        IPs or manual port forwarding.
      </p>

      <h2>Kademlia DHT Support</h2>
      <p>
        Braidpool will integrate libp2p's Kademlia DHT (Distributed Hash Table)
        to support decentralized peer discovery and content routing. Each peer:
      </p>

      <ul>
        <li>Maintains a routing table based on XOR distance.</li>
        <li>
          Can query for other peers or resources using a <code>GET</code>/
          <code>FIND</code> RPC.
        </li>
        <li>
          Learns about new nodes and updates its table with each interaction.
        </li>
      </ul>

      <p>
        This forms a resilient mesh even when some nodes go offline, critical
        for decentralized systems.
      </p>

      <h2>Code Example</h2>
      <p>Here's a snippet showing transport setup:</p>

      <pre>
        <code>{`let mut swarm = libp2p::SwarmBuilder::with_existing_identity(keypair)
        .with_tokio()
        .with_quic()
        .with_dns()
        .unwrap()
        .with_behaviour(|local_key| BraidPoolBehaviour::new(local_key).unwrap())?
        .with_swarm_config(|cfg| cfg.with_idle_connection_timeout(Duration::from_secs(u64::MAX)))
        .build();`}</code>
      </pre>

      <p>
        Checkout the related code here:{" "}
        <a
          href="https://github.com/braidpool/braidpool/blob/dev/node/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/braidpool/braidpool/blob/dev/node/
        </a>
      </p>

      <h2>Conclusion</h2>
      <p>
        Using libp2p has allowed Braidpool to move toward a trustless,
        decentralized architecture. With QUIC for fast encrypted transport, NAT
        traversal support via hole punching, and Kademlia DHT for resilient peer
        discovery, Braidpool is now equipped with a solid peer networking layer.
      </p>

      <p>
        In the coming weeks, the focus will be on peer scoring, block
        propagation protocols, and validation of sync logic. Stay tuned!
      </p>
    </>
  );

  return (
    <BlogPost
      title="Building Decentralized Peer Discovery with libp2p"
      subtitle="How Braidpool leverages libp2p for robust P2P networking"
      author="ABDULLAH AZEEM"
      date="JUL 01, 2025"
      content={content}
    />
  );
};

export default LibP2PPost;

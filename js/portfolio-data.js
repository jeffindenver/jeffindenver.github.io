function Data() {
  "use strict";

  this.getDiagramList = function () {
    const imagePath = "nosql-data-diagrams/";
    const thumbnailPath = "./images/diagrams/";

    return [{
        href: imagePath + "nosql-data-structure.png",
        src: thumbnailPath + "diagram_thumb_one.png",
        alt: "JSON example"
      },
      {
        href: imagePath + "assignment1.4-ord.png",
        src: thumbnailPath + "diagram_thumb_two.png",
        alt: "UML diagram"
      },
      {
        href: imagePath + "NoSQL-data-structure-assignment2.2.png",
        src: thumbnailPath + "diagram_thumb_three.png",
        alt: "JSON example"
      },
      {
        href: imagePath + "ORD-assignment2.2.png",
        src: thumbnailPath + "diagram_thumb_four.png",
        alt: "UML diagram"
      },
      {
        href: imagePath + "NoSQL-data-structure-assignment2.3.png",
        src: thumbnailPath + "diagram_thumb_five.png",
        alt: "JSON example"
      },
      {
        href: imagePath + "ORD-assignment2.3.png",
        src: thumbnailPath + "diagram_thumb_six.png",
        alt: "UML diagram"
      },
      {
        href: imagePath + "NoSQL-data-structure-assignment3.2.png",
        src: thumbnailPath + "diagram_thumb_eight.png",
        alt: "JSON example"
      },
      {
        href: imagePath + "ORD-assignment3.2.png",
        src: thumbnailPath + "diagram_thumb_seven.png",
        alt: "UML diagram"
      },
      {
        href: imagePath + "NoSQL-data-structure-assignment3.3.png",
        src: thumbnailPath + "diagram_thumb_nine.png",
        alt: "JSON example"
      },
      {
        href: imagePath + "ORD-assignment3.3.png",
        src: thumbnailPath + "diagram_thumb_ten.png",
        alt: "UML diagram"
      }
    ];
  };

  this.getPresentationList = function () {
    const videoPath = "./restful-api-presentations/";
    const altText = "video presentation. No audo";

    return [{
        src:  videoPath + "rest-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "restful-api-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src:  videoPath + "soap-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src:  videoPath + "json-api.mp4",
        alt: altText,
        width: "426"
      },
      {
        src:  videoPath + "hypermedia-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src:  videoPath + "SOA-ESB-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src:  videoPath + "microservices-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "value-stream-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "two-pizza-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "automated-testing-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "continuous-integration-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "pager-rotation-duty-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "approval-process-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "technology-versus-business-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "security-controls-video.mp4",
        alt: altText,
        width: "426"
      },
      {
        src: videoPath + "change-management-video.mp4",
        alt: altText,
        width: "426"
      }

    ]
  };
}

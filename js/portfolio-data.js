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
    return [{
        src: "./restful-api-presentations/rest-video.mp4",
        alt: "video presentation. No audio",
        width: "426"
      },
      {
        src: "./restful-api-presentations/restful-api-video.mp4",
        alt: "video presentation. No audio",
        width: "426"
      },
      {
        src: "./restful-api-presentations/soap-video.mp4",
        alt: "video presentation, No audio",
        width: "426"
      },
      {
        src: "./restful-api-presentations/json-api.mp4",
        alt: "video presentation, No audio",
        width: "426"
      },
      {
        src: "./restful-api-presentations/hypermedia-video.mp4",
        alt: "video presentation, no audio",
        width: "426"
      }
    ]
  };
}

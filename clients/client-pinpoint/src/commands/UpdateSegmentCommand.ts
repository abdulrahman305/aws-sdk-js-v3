// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateSegmentRequest, UpdateSegmentResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdateSegmentCommand, se_UpdateSegmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSegmentCommand}.
 */
export interface UpdateSegmentCommandInput extends UpdateSegmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSegmentCommand}.
 */
export interface UpdateSegmentCommandOutput extends UpdateSegmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateSegmentRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SegmentId: "STRING_VALUE", // required
 *   WriteSegmentRequest: { // WriteSegmentRequest
 *     Dimensions: { // SegmentDimensions
 *       Attributes: { // MapOfAttributeDimension
 *         "<keys>": { // AttributeDimension
 *           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *           Values: [ // ListOf__string // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       Behavior: { // SegmentBehaviors
 *         Recency: { // RecencyDimension
 *           Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 *           RecencyType: "ACTIVE" || "INACTIVE", // required
 *         },
 *       },
 *       Demographic: { // SegmentDemographics
 *         AppVersion: { // SetDimension
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Channel: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         DeviceType: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Make: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Model: {
 *           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 *           Values: "<ListOf__string>", // required
 *         },
 *         Platform: "<SetDimension>",
 *       },
 *       Location: { // SegmentLocation
 *         Country: "<SetDimension>",
 *         GPSPoint: { // GPSPointDimension
 *           Coordinates: { // GPSCoordinates
 *             Latitude: Number("double"), // required
 *             Longitude: Number("double"), // required
 *           },
 *           RangeInKilometers: Number("double"),
 *         },
 *       },
 *       Metrics: { // MapOfMetricDimension
 *         "<keys>": { // MetricDimension
 *           ComparisonOperator: "STRING_VALUE", // required
 *           Value: Number("double"), // required
 *         },
 *       },
 *       UserAttributes: {
 *         "<keys>": {
 *           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *           Values: "<ListOf__string>", // required
 *         },
 *       },
 *     },
 *     Name: "STRING_VALUE",
 *     SegmentGroups: { // SegmentGroupList
 *       Groups: [ // ListOfSegmentGroup
 *         { // SegmentGroup
 *           Dimensions: [ // ListOfSegmentDimensions
 *             {
 *               Attributes: {
 *                 "<keys>": {
 *                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                   Values: "<ListOf__string>", // required
 *                 },
 *               },
 *               Behavior: {
 *                 Recency: {
 *                   Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 *                   RecencyType: "ACTIVE" || "INACTIVE", // required
 *                 },
 *               },
 *               Demographic: {
 *                 AppVersion: "<SetDimension>",
 *                 Channel: "<SetDimension>",
 *                 DeviceType: "<SetDimension>",
 *                 Make: "<SetDimension>",
 *                 Model: "<SetDimension>",
 *                 Platform: "<SetDimension>",
 *               },
 *               Location: {
 *                 Country: "<SetDimension>",
 *                 GPSPoint: {
 *                   Coordinates: {
 *                     Latitude: Number("double"), // required
 *                     Longitude: Number("double"), // required
 *                   },
 *                   RangeInKilometers: Number("double"),
 *                 },
 *               },
 *               Metrics: {
 *                 "<keys>": {
 *                   ComparisonOperator: "STRING_VALUE", // required
 *                   Value: Number("double"), // required
 *                 },
 *               },
 *               UserAttributes: {
 *                 "<keys>": {
 *                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 *                   Values: "<ListOf__string>", // required
 *                 },
 *               },
 *             },
 *           ],
 *           SourceSegments: [ // ListOfSegmentReference
 *             { // SegmentReference
 *               Id: "STRING_VALUE", // required
 *               Version: Number("int"),
 *             },
 *           ],
 *           SourceType: "ALL" || "ANY" || "NONE",
 *           Type: "ALL" || "ANY" || "NONE",
 *         },
 *       ],
 *       Include: "ALL" || "ANY" || "NONE",
 *     },
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateSegmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSegmentResponse
 * //   SegmentResponse: { // SegmentResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreationDate: "STRING_VALUE", // required
 * //     Dimensions: { // SegmentDimensions
 * //       Attributes: { // MapOfAttributeDimension
 * //         "<keys>": { // AttributeDimension
 * //           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //           Values: [ // ListOf__string // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Behavior: { // SegmentBehaviors
 * //         Recency: { // RecencyDimension
 * //           Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //           RecencyType: "ACTIVE" || "INACTIVE", // required
 * //         },
 * //       },
 * //       Demographic: { // SegmentDemographics
 * //         AppVersion: { // SetDimension
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Channel: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         DeviceType: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Make: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Model: {
 * //           DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //           Values: "<ListOf__string>", // required
 * //         },
 * //         Platform: "<SetDimension>",
 * //       },
 * //       Location: { // SegmentLocation
 * //         Country: "<SetDimension>",
 * //         GPSPoint: { // GPSPointDimension
 * //           Coordinates: { // GPSCoordinates
 * //             Latitude: Number("double"), // required
 * //             Longitude: Number("double"), // required
 * //           },
 * //           RangeInKilometers: Number("double"),
 * //         },
 * //       },
 * //       Metrics: { // MapOfMetricDimension
 * //         "<keys>": { // MetricDimension
 * //           ComparisonOperator: "STRING_VALUE", // required
 * //           Value: Number("double"), // required
 * //         },
 * //       },
 * //       UserAttributes: {
 * //         "<keys>": {
 * //           AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //           Values: "<ListOf__string>", // required
 * //         },
 * //       },
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     ImportDefinition: { // SegmentImportResource
 * //       ChannelCounts: { // MapOf__integer
 * //         "<keys>": Number("int"),
 * //       },
 * //       ExternalId: "STRING_VALUE", // required
 * //       Format: "CSV" || "JSON", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       S3Url: "STRING_VALUE", // required
 * //       Size: Number("int"), // required
 * //     },
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SegmentGroups: { // SegmentGroupList
 * //       Groups: [ // ListOfSegmentGroup
 * //         { // SegmentGroup
 * //           Dimensions: [ // ListOfSegmentDimensions
 * //             {
 * //               Attributes: {
 * //                 "<keys>": {
 * //                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                   Values: "<ListOf__string>", // required
 * //                 },
 * //               },
 * //               Behavior: {
 * //                 Recency: {
 * //                   Duration: "HR_24" || "DAY_7" || "DAY_14" || "DAY_30", // required
 * //                   RecencyType: "ACTIVE" || "INACTIVE", // required
 * //                 },
 * //               },
 * //               Demographic: {
 * //                 AppVersion: "<SetDimension>",
 * //                 Channel: "<SetDimension>",
 * //                 DeviceType: "<SetDimension>",
 * //                 Make: "<SetDimension>",
 * //                 Model: "<SetDimension>",
 * //                 Platform: "<SetDimension>",
 * //               },
 * //               Location: {
 * //                 Country: "<SetDimension>",
 * //                 GPSPoint: {
 * //                   Coordinates: {
 * //                     Latitude: Number("double"), // required
 * //                     Longitude: Number("double"), // required
 * //                   },
 * //                   RangeInKilometers: Number("double"),
 * //                 },
 * //               },
 * //               Metrics: {
 * //                 "<keys>": {
 * //                   ComparisonOperator: "STRING_VALUE", // required
 * //                   Value: Number("double"), // required
 * //                 },
 * //               },
 * //               UserAttributes: {
 * //                 "<keys>": {
 * //                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                   Values: "<ListOf__string>", // required
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           SourceSegments: [ // ListOfSegmentReference
 * //             { // SegmentReference
 * //               Id: "STRING_VALUE", // required
 * //               Version: Number("int"),
 * //             },
 * //           ],
 * //           SourceType: "ALL" || "ANY" || "NONE",
 * //           Type: "ALL" || "ANY" || "NONE",
 * //         },
 * //       ],
 * //       Include: "ALL" || "ANY" || "NONE",
 * //     },
 * //     SegmentType: "DIMENSIONAL" || "IMPORT", // required
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSegmentCommandInput - {@link UpdateSegmentCommandInput}
 * @returns {@link UpdateSegmentCommandOutput}
 * @see {@link UpdateSegmentCommandInput} for command's `input` shape.
 * @see {@link UpdateSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class UpdateSegmentCommand extends $Command<
  UpdateSegmentCommandInput,
  UpdateSegmentCommandOutput,
  PinpointClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateSegmentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSegmentCommandInput, UpdateSegmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSegmentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateSegmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "UpdateSegment",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateSegmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSegmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSegmentCommandOutput> {
    return de_UpdateSegmentCommand(output, context);
  }
}

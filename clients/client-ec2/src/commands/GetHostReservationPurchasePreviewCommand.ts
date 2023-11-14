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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetHostReservationPurchasePreviewRequest, GetHostReservationPurchasePreviewResult } from "../models/models_5";
import {
  de_GetHostReservationPurchasePreviewCommand,
  se_GetHostReservationPurchasePreviewCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHostReservationPurchasePreviewCommand}.
 */
export interface GetHostReservationPurchasePreviewCommandInput extends GetHostReservationPurchasePreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetHostReservationPurchasePreviewCommand}.
 */
export interface GetHostReservationPurchasePreviewCommandOutput
  extends GetHostReservationPurchasePreviewResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Preview a reservation purchase with configurations that match those of your Dedicated
 *             Host. You must have active Dedicated Hosts in your account before you purchase a
 *             reservation.</p>
 *          <p>This is a preview of the <a>PurchaseHostReservation</a> action and does not
 *             result in the offering being purchased.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetHostReservationPurchasePreviewCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetHostReservationPurchasePreviewCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetHostReservationPurchasePreviewRequest
 *   HostIdSet: [ // RequestHostIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   OfferingId: "STRING_VALUE", // required
 * };
 * const command = new GetHostReservationPurchasePreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetHostReservationPurchasePreviewResult
 * //   CurrencyCode: "USD",
 * //   Purchase: [ // PurchaseSet
 * //     { // Purchase
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       HostIdSet: [ // ResponseHostIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       HostReservationId: "STRING_VALUE",
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       UpfrontPrice: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TotalHourlyPrice: "STRING_VALUE",
 * //   TotalUpfrontPrice: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHostReservationPurchasePreviewCommandInput - {@link GetHostReservationPurchasePreviewCommandInput}
 * @returns {@link GetHostReservationPurchasePreviewCommandOutput}
 * @see {@link GetHostReservationPurchasePreviewCommandInput} for command's `input` shape.
 * @see {@link GetHostReservationPurchasePreviewCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetHostReservationPurchasePreviewCommand extends $Command<
  GetHostReservationPurchasePreviewCommandInput,
  GetHostReservationPurchasePreviewCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetHostReservationPurchasePreviewCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostReservationPurchasePreviewCommandInput, GetHostReservationPurchasePreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHostReservationPurchasePreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetHostReservationPurchasePreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetHostReservationPurchasePreview",
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
  private serialize(
    input: GetHostReservationPurchasePreviewCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetHostReservationPurchasePreviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHostReservationPurchasePreviewCommandOutput> {
    return de_GetHostReservationPurchasePreviewCommand(output, context);
  }
}

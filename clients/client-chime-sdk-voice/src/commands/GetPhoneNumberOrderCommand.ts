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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  GetPhoneNumberOrderRequest,
  GetPhoneNumberOrderResponse,
  GetPhoneNumberOrderResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPhoneNumberOrderCommand, se_GetPhoneNumberOrderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPhoneNumberOrderCommand}.
 */
export interface GetPhoneNumberOrderCommandInput extends GetPhoneNumberOrderRequest {}
/**
 * @public
 *
 * The output of {@link GetPhoneNumberOrderCommand}.
 */
export interface GetPhoneNumberOrderCommandOutput extends GetPhoneNumberOrderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details for the specified phone number order, such as the order
 *          creation timestamp, phone numbers in E.164 format, product type, and
 *          order status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetPhoneNumberOrderCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetPhoneNumberOrderCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetPhoneNumberOrderRequest
 *   PhoneNumberOrderId: "STRING_VALUE", // required
 * };
 * const command = new GetPhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * // { // GetPhoneNumberOrderResponse
 * //   PhoneNumberOrder: { // PhoneNumberOrder
 * //     PhoneNumberOrderId: "STRING_VALUE",
 * //     ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 * //     Status: "Processing" || "Successful" || "Failed" || "Partial" || "PendingDocuments" || "Submitted" || "FOC" || "ChangeRequested" || "Exception" || "CancelRequested" || "Cancelled",
 * //     OrderType: "New" || "Porting",
 * //     OrderedPhoneNumbers: [ // OrderedPhoneNumberList
 * //       { // OrderedPhoneNumber
 * //         E164PhoneNumber: "STRING_VALUE",
 * //         Status: "Processing" || "Acquired" || "Failed",
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPhoneNumberOrderCommandInput - {@link GetPhoneNumberOrderCommandInput}
 * @returns {@link GetPhoneNumberOrderCommandOutput}
 * @see {@link GetPhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberOrderCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 */
export class GetPhoneNumberOrderCommand extends $Command<
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: GetPhoneNumberOrderCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPhoneNumberOrderCommandInput, GetPhoneNumberOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPhoneNumberOrderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetPhoneNumberOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPhoneNumberOrderResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "GetPhoneNumberOrder",
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
  private serialize(input: GetPhoneNumberOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPhoneNumberOrderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPhoneNumberOrderCommandOutput> {
    return de_GetPhoneNumberOrderCommand(output, context);
  }
}
